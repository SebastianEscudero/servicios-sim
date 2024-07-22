import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ContactForm = () => {
  const templateId = 'template_bmjw9mq';
  const emailId = "service_vdo9107"
  const publicKey = "tdGS-ea0-bienpHeq"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id.replace('contact-', '')]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const templateParams = {
        to_email: "seba.escuderoleiva@gmail.com", 
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
    };

    emailjs.send(emailId, templateId, templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitStatus('success');
        }, (error) => {
            console.error("Email error:", error);
            setSubmitStatus('error');
        });
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contáctanos</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input 
              id="contact-name" 
              placeholder="Nombre" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input 
              id="contact-email" 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea 
              id="contact-message" 
              placeholder="Mensaje" 
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button 
            type="submit" 
            variant="sim" 
            className={`w-full ${submitStatus === 'success' ? 'bg-green-500' : ''}`}
            disabled={submitStatus === 'success'}
          >
            {submitStatus === 'success' ? 'Enviado' : 'Enviar Mensaje'}
          </Button>
          {submitStatus === 'error' && (
            <p className="text-red-500">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm