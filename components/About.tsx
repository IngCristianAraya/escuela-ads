import { Card, CardContent } from '@/components/ui/card';
import { Music, Users, Clock, MapPin, Video, Coins } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Music className="w-12 h-12 text-red-500" />,
      title: "Salsa",
      description: "Aprende los pasos básicos y avanzados de este ritmo caribeño lleno de pasión y energía.",
      color: "bg-red-50"
    },
    {
      icon: <Music className="w-12 h-12 text-pink-500" />,
      title: "Bachata",
      description: "Domina este sensual baile dominicano que conquista pistas de baile en todo el mundo.",
      color: "bg-pink-50"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Todos los Niveles",
      description: "Desde principiante hasta avanzado. Nuestros instructores se adaptan a tu ritmo de aprendizaje.",
      color: "bg-orange-50"
    },
    {
      icon: <MapPin className="w-12 h-12 text-red-500" />,
      title: "Clases Personalizadas",
      description: "Vive una experiencia única: sesiones privadas en un estudio acústicamente diseñado, con atención exclusiva, música envolvente y el ambiente perfecto para desarrollar tu estilo propio.",
      color: "bg-red-50"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-b from-neutral-50 to-white" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sobre Nuestras <span className="text-red-500">Clases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sumérgete en el mundo de la danza latina con nuestros instructores certificados. 
            Cada clase está diseñada para que disfrutes mientras aprendes, sin importar tu nivel de experiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="font-dancing text-3xl md:text-5xl font-bold mb-8">¿Qué incluye cada clase?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-yellow-300" />
              <h4 className="text-xl font-bold mb-2">Duración de clase</h4>
              <p className="text-white/90">1 hora de clase</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-yellow-300" />
              <h4 className="text-xl font-bold mb-2">Horario de clases</h4>
              <p className="text-white/90">Martes y Jueves de 8:15 AM a 09:15 PM <br /> Viernes de 07:00 PM a 08:00 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Coins className="w-12 h-12 mb-4 text-yellow-300" />
              <h4 className="text-xl font-bold mb-2">Pago por Clase</h4>
              <p className="text-white/90">No hay mensualidad, solo paga 10 soles por clase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}