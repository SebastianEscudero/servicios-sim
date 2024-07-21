import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ContactForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contáctanos</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input placeholder="Nombre" />
          </div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Textarea placeholder="Mensaje" />
          </div>
          <Button type="submit" variant="sim" className="w-full">
            Enviar Mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm