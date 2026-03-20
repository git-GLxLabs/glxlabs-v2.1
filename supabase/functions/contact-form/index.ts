import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'npm:resend@4.0.0'
import { z } from 'https://esm.sh/zod@3.23.8'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
})

const allowedOrigins = [
  'https://glxlabs.com',
  'https://www.glxlabs.com',
  'https://glxlab805.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
]

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || ''
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  }
}

// Email client (uses RESEND_API_KEY secret)
const resend = new Resend(Deno.env.get('RESEND_API_KEY') ?? '')
const toEmail = Deno.env.get('CONTACT_TO_EMAIL') ?? 'g@glxlabs.com'

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req)

  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const { name, email, message } = ContactSchema.parse(body)

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Save to database
    const { data, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([{ name, email, message }])
      .select()

    if (dbError) {
      throw dbError
    }

    // Send email notification
    const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Message: ${message}

Submitted at: ${new Date().toISOString()}
`

    // Send email via Resend
    try {
      const emailSendResult = await resend.emails.send({
        from: 'Inquiry @ GLxLabs <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: 'New Inquiry @GlxLabs.com',
        text: emailBody,
      })
      console.log('Resend email result:', emailSendResult)
    } catch (e) {
      console.error('Error sending email with Resend:', e)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    const isValidation = error instanceof z.ZodError
    return new Response(
      JSON.stringify({ error: isValidation ? 'Invalid input. Please check your entries.' : 'Unable to process your request. Please try again.' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
