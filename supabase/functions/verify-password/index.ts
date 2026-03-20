import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const allowedOrigins = [
  'https://glxlabs.com',
  'https://www.glxlabs.com',
  'https://glxlab805.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  };
}

// Server-side passwords - never exposed to the client
const PASSWORDS: Record<string, string> = {
  lab805: Deno.env.get('LAB805_PASSWORD') ?? '',
  steam_tunnels: Deno.env.get('STEAM_TUNNELS_PASSWORD') ?? '',
};

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { resource, password } = await req.json();

    if (!resource || !password) {
      return new Response(
        JSON.stringify({ error: 'Resource and password are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const expectedPassword = PASSWORDS[resource];
    if (!expectedPassword) {
      return new Response(
        JSON.stringify({ error: 'Unknown resource' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const valid = password === expectedPassword;

    let token: string | null = null;
    if (valid) {
      const encoder = new TextEncoder();
      const data = encoder.encode(`${resource}:${Date.now()}:${expectedPassword}`);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      token = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    return new Response(
      JSON.stringify({ valid, token }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in verify-password:', error);
    return new Response(
      JSON.stringify({ error: 'Unable to process request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
