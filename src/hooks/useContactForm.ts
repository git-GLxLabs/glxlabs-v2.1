import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const submitContactForm = async (formData: ContactFormData) => {
    setIsSubmitting(true)
    
    
    try {
      // Call the edge function instead of direct database insert
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      })

      if (error) {
        throw error
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      })
      
      return true
    } catch (error) {
      // Error details intentionally omitted from client logs
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitContactForm,
    isSubmitting
  }
}