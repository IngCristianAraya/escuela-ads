'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    // Ensure this only runs in the browser
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById('inscripcion');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[4.5rem] md:pt-[4rem] -mt-[4.5rem] md:-mt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-pink-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/hero.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto w-full py-8">
        <h1 className="font-dancing text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 animate-pulse px-2">
          <span className="block">¡Aprende a bailar</span>
          <span className="block text-yellow-300 leading-tight my-2 md:my-4">Bachata</span>
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl">¡desde cero!</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-light max-w-4xl mx-auto leading-relaxed px-2">
          Descubre el ritmo que llevas dentro. Clases para todos los niveles, 
          <span className="font-semibold text-yellow-300"> presenciales y a domicilio</span>
        </p>



        {/* CTA Button */}
        <div className="px-4 w-full">
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl mb-8 sm:mb-12"
          >
            ¡Inscríbeme Ahora! 🎶
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mt-6 sm:mt-8 px-2">
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-0 sm:mb-1">+50</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider">Alumnos</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-0 sm:mb-1">1+</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider">Año Exp.</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-0 sm:mb-1">100%</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider">Compromiso</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-0 sm:mb-1">100%</div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider">Dedicación</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}