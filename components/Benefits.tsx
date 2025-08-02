import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Users, Smile } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Mejora tu Salud Física",
      description: "El baile es un ejercicio cardiovascular completo que tonifica músculos, mejora la coordinación y aumenta la flexibilidad. ¡Quema hasta 400 calorías por clase!",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Reduce el Estrés",
      description: "La música y el movimiento liberan endorfinas, reduciendo cortisol y ansiedad. Es tu momento de desconexión y relajación.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Conoce Nuevas Personas",
      description: "Únete a una comunidad vibrante de bailarines. Forma amistades duraderas y amplía tu círculo social en un ambiente divertido.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Smile className="w-12 h-12 text-yellow-500" />,
      title: "Mejora tu Autoestima",
      description: "Desarrolla confianza en ti mismo, mejora tu postura y expresión corporal. Cada logro te hará sentir más seguro y empoderado.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-neutral-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Por qué <span className="text-red-500">Bailar</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que solo aprender pasos, el baile transforma tu vida de manera integral. 
            Descubre todos los beneficios que te esperan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Alumnos Inscritos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-white/90">Año de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Compromiso</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}