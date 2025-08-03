import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Dancing_Script } from 'next/font/google';

// Configuración de Poppins optimizada
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
  preload: true
});

// Configuración de Dancing Script optimizada
const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
  fallback: ['cursive'],
  preload: true
});

const baseUrl = 'http://localhost:3000'; // Cambia esto por tu dominio en producción

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: '¡Aprende Salsa y Bachata desde Cero! | Clases de Baile',
  description: 'Únete a nuestras clases de salsa y bachata. Mejora tu salud, reduce el estrés y conoce nuevas personas. ¡No necesitas experiencia previa!',
  keywords: 'salsa, bachata, clases de baile, danza latina, baile, música latina',
  openGraph: {
    title: '¡Aprende Salsa y Bachata desde Cero!',
    description: 'Únete a nuestras clases de salsa y bachata. Mejora tu salud, reduce el estrés y conoce nuevas personas.',
    type: 'website',
    url: '/',
    siteName: 'Escuela de Baile',
    locale: 'es_PE',
    images: [
      {
        url: '/images/og-image.jpg', // Asegúrate de tener esta imagen en tu carpeta public/images
        width: 1200,
        height: 630,
        alt: 'Clases de Salsa y Bachata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¡Aprende Salsa y Bachata desde Cero!',
    description: 'Clases profesionales de baile para todos los niveles. ¡Inscríbete hoy mismo!',
    images: ['/images/og-image.jpg'],
  },
};

import { MainNav } from '@/components/MainNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${dancingScript.variable} font-sans antialiased`}>
        <MainNav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}