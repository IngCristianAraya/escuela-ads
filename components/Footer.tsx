import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';

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
                <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Martes y Jueves</p>
                  <p className="text-gray-300">8:15 am - 9:15 am</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Viernes</p>
                  <p className="text-gray-300">7:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sábados y Domingos</p>
                  <p className="text-gray-300">Eventos Especiales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:flex md:flex-col">
            <h3 className="font-dancing text-3xl font-bold text-yellow-300 mb-6">
              Navegación
            </h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a href="#inicio" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Inicio
              </a>
              <a href="#sobre-nosotros" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Sobre Nosotros
              </a>
              <a href="#beneficios" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Beneficios
              </a>
              <a href="#ubicacion" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Ubicación
              </a>
              <a href="#testimonios" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Testimonios
              </a>
              <a href="#galeria" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Galería
              </a>
              <a href="#contacto" className="block text-gray-300 hover:text-white hover:underline transition-colors">
                Contacto
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
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/chris285.ca/" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 shadow-lg hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 hover:scale-110 hover:rotate-[-4deg]"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip="Síguenos"
              >
                <Instagram className="w-6 h-6 text-white transform transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500 group-hover:animate-pulse"></div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-lg">
                  Síguenos en Instagram
                </span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/christian.acevedohuaman" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-110 hover:rotate-[4deg]"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip="Danos like"
              >
                <Facebook className="w-6 h-6 text-white transform transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500 group-hover:animate-pulse"></div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-lg">
                  Danos like en Facebook
                </span>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@chris.05.96" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-2xl hover:shadow-gray-800/40 transition-all duration-500 hover:scale-110 hover:rotate-[-4deg]"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip="Síguenos"
              >
                <div className="relative w-6 h-6">
                  <svg className="absolute inset-0 w-full h-full text-white transform transition-transform duration-500 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500 group-hover:animate-pulse"></div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-lg">
                  Síguenos en TikTok
                </span>
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
            <p>&copy; 2024 <a href="https://www.facebook.com/CreciendoDigital.tv" className="hover:underline" target="_blank" rel="noopener noreferrer">Tubarrio.pe</a>. Todos los derechos reservados.</p>
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