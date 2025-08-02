import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(
  () => import('@/components/LocationMap'),
  { ssr: false }
);
import Form from '@/components/Form';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Gallery />
      <LocationMap />
      <Form />
      <Footer />
    </main>
  );
}