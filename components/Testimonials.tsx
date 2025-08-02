import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante desde hace 2 años",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Llegué sin saber nada de baile y ahora me siento como una verdadera salsera. Los instructores son increíbles y el ambiente es súper acogedor. ¡Ha sido una de las mejores decisiones de mi vida!",
      rating: 5
    },
    {
      name: "Carlos Ramírez",
      role: "Ex-principiante, ahora instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Empecé las clases por curiosidad y terminé enamorándome de la bachata. No solo mejoré mi coordinación, sino que conocí a mi esposa aquí. Ahora también soy instructor y veo cómo transforma vidas.",
      rating: 5
    },
    {
      name: "Ana Sofía Herrera",
      role: "Clases online desde Madrid",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Las clases online son fantásticas. Puedo aprender desde casa con la misma calidad que las presenciales. Los profesores son muy pacientes y siempre están dispuestos a ayudar. ¡100% recomendado!",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white to-neutral-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="text-red-500">Estudiantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estas son las historias reales de personas que decidieron dar el primer paso. 
            ¿Cuál será la tuya?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-red-500/20">
                <Quote className="w-16 h-16" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-red-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video testimonials section */}
        
      </div>
    </section>
  );
}