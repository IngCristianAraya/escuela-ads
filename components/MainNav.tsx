'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Asegurarse de que solo se ejecute en el cliente
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Cerrar menú móvil al hacer clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    // Deshabilitar scroll cuando el menú móvil está abierto
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [scrolled, mobileMenuOpen]);

  // Cerrar menú al hacer clic en un enlace
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/90 py-3' : 'bg-black/50 py-3',
        mobileMenuOpen ? 'bg-black' : ''
      )}
      style={{
        transition: 'background-color 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease',
        WebkitBackdropFilter: scrolled || mobileMenuOpen ? 'blur(8px)' : 'none',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(8px)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#inicio" 
            className="flex items-center space-x-2 z-50"
            onClick={closeMobileMenu}
          >
            <span className="text-2xl font-bold text-yellow-300 font-dancing">Escuela ADS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative transition-colors font-medium group text-white',
                  'hover:text-yellow-300'
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#inscripcion"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition-colors"
            >
              Inscríbete
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={cn(
          'md:hidden fixed inset-0 bg-black/95 z-40 transform transition-all duration-300 ease-in-out overflow-y-auto',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
          'flex flex-col items-center justify-start',
          'pt-24 pb-10 px-4',
          'backdrop-blur-sm'
        )}
        style={{
          height: '100vh',
          WebkitOverflowScrolling: 'touch',
        }}
      >
          <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-medium text-white hover:text-yellow-300 transition-colors py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#inscripcion"
              className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors w-full text-center"
              onClick={closeMobileMenu}
            >
              Inscríbete
            </Link>
          </nav>
          
          {/* Información de contacto en móvil */}
          <div className="mt-12 text-center text-gray-300 text-sm">
            <p className="mb-2">¿Tienes preguntas?</p>
            <a href="tel:+51987654321" className="block text-white font-medium hover:text-yellow-300 mb-2">
              +51 987 654 321
            </a>
            <a href="mailto:info@escuelaads.com" className="block text-white font-medium hover:text-yellow-300">
              info@escuelaads.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}