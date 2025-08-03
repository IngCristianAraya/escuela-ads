'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Music2, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    preferencia: 'salsa', // Default value for radio group
    modalidad: 'escuela', // Default value for radio group
    nivel: 'principiante', // Default value for radio group
    horario: '',
    mensaje: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar datos a Google Sheets
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, String(value));
      });
      
      // Reemplaza ESTA_URL con la URL de tu Web App de Google Script
      const response = await fetch('TU_URL_DE_GOOGLE_SCRIPT_AQUI', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });
      
      // Si todo sale bien, mostrar mensaje de éxito
      setSubmitted(true);
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Mostrar mensaje de error al usuario si es necesario
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `¡Hola! Me interesa inscribirme en las clases de baile.

*Datos del formulario:*
👤 Nombre: ${formData.nombre || 'No especificado'}
📱 Teléfono: ${formData.telefono || 'No especificado'}
📧 Email: ${formData.email || 'No especificado'}
💃 Preferencia: ${formData.preferencia || 'No especificada'}
🏫 Modalidad: ${formData.modalidad || 'No especificada'}
📊 Nivel: ${formData.nivel || 'No especificado'}
⏰ Horario: ${formData.horario || 'No especificado'}
💬 Mensaje: ${formData.mensaje || 'Sin mensaje adicional'}`;
    
    // Verificar si es un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Si es móvil, abrir directamente en la app, si no, abrir en web.whatsapp.com
    const whatsappUrl = isMobile 
      ? `https://wa.me/51966320353?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=51966320353&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (submitted) {
    return (
      <section id="inscripcion" className="py-12 sm:py-20 bg-gradient-to-b from-red-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎉</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">¡Gracias por inscribirte!</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-2">
              Hemos recibido tu solicitud. Nos pondremos en contacto contigo muy pronto 
              para confirmar tu lugar en nuestras clases.
            </p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              ¡Escríbenos por WhatsApp!
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-12 sm:py-20 bg-gradient-to-b from-white to-neutral-50" style={{ scrollMarginTop: '5rem' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="font-dancing text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            ¡Inscríbete <span className="text-yellow-300">Ahora</span>!
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700">
            Da el primer paso hacia una vida más divertida y saludable. 
            Completa el formulario y únete a nuestra comunidad.
          </p>
        </div>

        <Card className="border-0 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
          <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-8 pt-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Music2 className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" />
              <span>Formulario de Inscripción</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-900 font-semibold">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="Tu nombre completo"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="telefono" className="text-gray-900 font-semibold">Teléfono / WhatsApp *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="+51 987 654 321"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 font-semibold">Correo Electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tu@email.com"
                  required
                  className="mt-2"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-900 font-semibold">Preferencia de baile *</Label>
                <RadioGroup 
                  value={formData.preferencia} 
                  onValueChange={(value) => setFormData({...formData, preferencia: value})}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
                >
                  {['salsa', 'bachata', 'ambos'].map((option) => (
                    <div key={option} className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                      <RadioGroupItem 
                        value={option} 
                        id={option} 
                        className="text-red-500 border-gray-300 w-5 h-5" 
                      />
                      <Label htmlFor={option} className="font-normal capitalize cursor-pointer text-base">
                        {option === 'ambos' ? 'Ambos estilos' : option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-gray-900 font-semibold mb-4 block">Modalidad Preferida *</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div 
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer transition-colors ${formData.modalidad === 'domicilio' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}
                    onClick={() => setFormData({...formData, modalidad: 'domicilio'})}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.modalidad === 'domicilio' ? 'border-blue-500' : 'border-gray-400'}`}>
                      {formData.modalidad === 'domicilio' && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                    </div>
                    <Label className="cursor-pointer">A domicilio</Label>
                  </div>
                  <div 
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer transition-colors ${formData.modalidad === 'escuela' ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'}`}
                    onClick={() => setFormData({...formData, modalidad: 'escuela'})}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.modalidad === 'escuela' ? 'border-green-500' : 'border-gray-400'}`}>
                      {formData.modalidad === 'escuela' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                    </div>
                    <Label className="cursor-pointer">En la escuela</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-gray-900 font-semibold mb-4 block">Nivel de Experiencia</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div 
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer transition-colors ${formData.nivel === 'principiante' ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50'}`}
                    onClick={() => setFormData({...formData, nivel: 'principiante'})}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.nivel === 'principiante' ? 'border-purple-500' : 'border-gray-400'}`}>
                      {formData.nivel === 'principiante' && <div className="w-3 h-3 rounded-full bg-purple-500"></div>}
                    </div>
                    <Label className="cursor-pointer">Principiante</Label>
                  </div>
                  <div 
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer transition-colors ${formData.nivel === 'intermedio' ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50'}`}
                    onClick={() => setFormData({...formData, nivel: 'intermedio'})}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.nivel === 'intermedio' ? 'border-yellow-500' : 'border-gray-400'}`}>
                      {formData.nivel === 'intermedio' && <div className="w-3 h-3 rounded-full bg-yellow-500"></div>}
                    </div>
                    <Label className="cursor-pointer">Intermedio</Label>
                  </div>
                  <div 
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer transition-colors ${formData.nivel === 'avanzado' ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-gray-50'}`}
                    onClick={() => setFormData({...formData, nivel: 'avanzado'})}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.nivel === 'avanzado' ? 'border-indigo-500' : 'border-gray-400'}`}>
                      {formData.nivel === 'avanzado' && <div className="w-3 h-3 rounded-full bg-indigo-500"></div>}
                    </div>
                    <Label className="cursor-pointer">Avanzado</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="mensaje" className="text-gray-900 font-semibold">Mensaje Adicional</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  placeholder="¿Tienes alguna pregunta o comentario especial?"
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <Checkbox 
                  id="newsletter" 
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({...formData, newsletter: !!checked})}
                  className="mt-0.5 border-gray-300 data-[state=checked]:bg-red-500 data-[state=checked]:text-white w-5 h-5 flex-shrink-0"
                />
                <Label htmlFor="newsletter" className="text-sm text-gray-700 font-normal leading-tight">
                  Quiero recibir noticias y promociones por correo electrónico
                </Label>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : '¡Quiero Aprender a Bailar!'}
                </Button>
                
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}