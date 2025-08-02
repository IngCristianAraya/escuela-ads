import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Dancing_Script } from 'next/font/google';

// Configuración de Poppins con display: swap para mejor rendimiento
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  adjustFontFallback: false
});

// Configuración de Dancing Script con display: swap
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: '¡Aprende Salsa y Bachata desde Cero! | Clases de Baile',
  description: 'Únete a nuestras clases de salsa y bachata. Mejora tu salud, reduce el estrés y conoce nuevas personas. ¡No necesitas experiencia previa!',
  keywords: 'salsa, bachata, clases de baile, danza latina, baile, música latina',
  openGraph: {
    title: '¡Aprende Salsa y Bachata desde Cero!',
    description: 'Únete a nuestras clases de salsa y bachata. Mejora tu salud, reduce el estrés y conoce nuevas personas.',
    type: 'website',
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