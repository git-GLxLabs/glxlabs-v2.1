import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

interface ContactFormData {
  name: string
  email: string
  message: string
}

// Web3Forms public access key — safe to expose in frontend
// Get your own free at https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? '7b9c2e4d-f1a3-4b8e-9c2d-e5f6a7b8c9d0'

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const submitContactForm = async (formData: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'GLxLabs.com — New Message',
          from_name: 'GLxLabs Contact Form',
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: 'Message sent!',
          description: "We'll get back to you within 24 hours.",
        })
        return true
      } else {
        throw new Error(result.message)
      }
    } catch {
      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitContactForm, isSubmitting }
}
