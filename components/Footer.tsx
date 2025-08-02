import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-8 md:gap-8 mb-12">
          {/* Contact Info */}
          <div className="md:flex md:flex-col">
            <h3 className="font-dancing text-3xl font-bold text-yellow-300 mb-6">
              Contacto
            </h3>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Estudio Principal</p>
                  <p className="text-gray-300">Calle Eugenio Paredes 2471 (Frente al colegio Saco Oliveros)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-300 mr-3" /> 
                <div>
                  <p className="font-semibold">+51 966 320 353</p>
                  <p className="text-gray-300">WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-300 mr-3" />
                <p>info@salsabachataclases.com</p>
              </div>
            </div>
          </div>

          {/* Class Schedule */}
          <div className="md:flex md:flex-col">
            <h3 className="font-dancing text-3xl font-bold text-yellow-300 mb-6">
              Horarios
            </h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-300" />
                <div>
                  <p className="font-semibold">Lunes - Viernes</p>
                  <p className="text-gray-300">6:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-300" />
                <div>
                  <p className="font-semibold">Sábados</p>
                  <p className="text-gray-300">2:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-300" />
                <div>
                  <p className="font-semibold">Domingos</p>
                  <p className="text-gray-300">Eventos Especiales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:flex md:flex-col">
            <h3 className="font-dancing text-3xl font-bold text-yellow-300 mb-6">
              Enlaces
            </h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Nuestros Instructores
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Precios y Paquetes
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Eventos Próximos
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Blog de Baile
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:flex md:flex-col">
            <h3 className="font-dancing text-3xl font-bold text-yellow-300 mb-6">
              Síguenos
            </h3>
            <p className="text-gray-300 mb-6 text-center md:text-left">
              Únete a nuestra comunidad online y mantente al día con eventos, 
              tips de baile y mucho más.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/chris285.ca/" 
                className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/christian.acevedohuaman" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@salsabachataclases" 
                className="bg-black hover:bg-black/90 p-3 rounded-full transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex space-x-6 justify-center">
            <div className="text-center">
            </div>
          </div>
          <div className="text-center md:text-center text-gray-400 mt-4">
            <p>&copy; 2024 <a href="https://www.facebook.com/CreciendoDigital.tv" className="hover:underline" target="_blank" rel="noopener noreferrer">Escuela ADS</a>. Todos los derechos reservados.</p>
          </div>
        </div>

        {/* Emergency Contact Card */}
        {/*<Card className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 border-0 text-white">
          <div className="p-6 text-center">
            <h4 className="font-bold text-xl mb-2">¿Necesitas ayuda inmediata?</h4>
            <p className="mb-4">Nuestro equipo está disponible para resolver todas tus dudas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                📞 Llamar Ahora
              </a>
              <a 
                href="https://wa.me/15551234567"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </Card>*/}
      </div>
    </footer>
  );
}