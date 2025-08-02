'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/escueladebaile.webp",
      alt: "Escuela de baile",
      title: "Escuela de Baile"
    },
    {
      src: "/bachata.webp",
      alt: "Estudiantes practicando bachata",
      title: "Taller de Bachata"
    },
    {
      src: "/parejadebaile.webp",
      alt: "Grupo de estudiantes en clase",
      title: "clases a domicilio"
    },
    {
      src: "/baile.webp",
      alt: "Evento social de baile",
      title: "Social Dance Night"
    },
    {
      src: "https://images.pexels.com/photos/3593919/pexels-photo-3593919.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Instructores demostrando",
      title: "Demostración de Instructores"
    },
    {
      src: "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Estudio de baile",
      title: "Nuestro Estudio Principal"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-neutral-50" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestra <span className="text-red-500">Galería</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echa un vistazo a nuestras clases, eventos y la increíble comunidad 
            que hemos construido juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full">
              <Button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                size="sm"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                size="sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                size="sm"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <div className="relative w-full h-[80vh] rounded-lg">
                <Image 
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  className="object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              
              <div 
                className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 backdrop-blur-sm rounded-lg p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold">{images[currentIndex].title}</h3>
                <p className="text-sm opacity-80">{currentIndex + 1} de {images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}