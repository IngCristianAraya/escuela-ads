'use client';

// Importar estilos de Leaflet
import 'leaflet/dist/leaflet.css';
import '../app/leaflet-fix.css';

import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MapPin } from 'lucide-react';

// Coordenadas proporcionadas
const locationData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [-77.07396980458336, -12.048548844155855],
            [-77.07423471658032, -12.048561571631279],
            [-77.07449707740471, -12.048599631488598],
            [-77.07475436045026, -12.048662657201252],
            [-77.07500408800684, -12.048750041814484],
            [-77.07524385511962, -12.048860943790006],
            [-77.07547135274794, -12.048994295109564],
            [-77.07568439000066, -12.049148811559446],
            [-77.07588091523444, -12.049323005096932],
            [-77.07605903581118, -12.049515198179588],
            [-77.07621703632502, -12.049723539919528],
            [-77.07635339512284, -12.04994602390706],
            [-77.07646679895946, -12.050180507532165],
            [-77.07655615564629, -12.050424732617754],
            [-77.07662060457149, -12.050676347166062],
            [-77.07665952499048, -12.050932928008761],
            [-77.07667254200639, -12.051192004142749],
            [-77.0766595301835, -12.051451080526833],
            [-77.076620614758, -12.051707662110218],
            [-77.07655617043478, -12.051959277861329],
            [-77.07646681778166, -12.052203504565625],
            [-77.07635341725542, -12.05243799016313],
            [-77.07621706091743, -12.052660476400957],
            [-77.07605906191834, -12.052868820582606],
            [-77.07588094185306, -12.053061016204556],
            [-77.07568441610782, -12.053235212281336],
            [-77.07547137734032, -12.053389731172928],
            [-77.07524387725219, -12.053523084742782],
            [-77.07500410682903, -12.053633988690697],
            [-77.07475437523877, -12.05372137492264],
            [-77.07449708759123, -12.053784401838099],
            [-77.07423472177337, -12.053822462436102],
            [-77.07396980458336, -12.053835190161625],
            [-77.07370488739336, -12.053822462436102],
            [-77.0734425215755, -12.053784401838099],
            [-77.07318523392794, -12.05372137492264],
            [-77.07293550233769, -12.053633988690697],
            [-77.07269573191454, -12.053523084742782],
            [-77.07246823182639, -12.053389731172928],
            [-77.07225519305891, -12.053235212281336],
            [-77.07205866731367, -12.053061016204556],
            [-77.07188054724838, -12.052868820582606],
            [-77.0717225482493, -12.052660476400957],
            [-77.07158619191132, -12.05243799016313],
            [-77.07147279138506, -12.052203504565625],
            [-77.07138343873194, -12.051959277861329],
            [-77.07131899440873, -12.051707662110218],
            [-77.07128007898322, -12.051451080526833],
            [-77.07126706716033, -12.051192004142749],
            [-77.07128008417625, -12.050932928008761],
            [-77.07131900459522, -12.050676347166062],
            [-77.07138345352044, -12.050424732617754],
            [-77.07147281020727, -12.050180507532165],
            [-77.07158621404389, -12.04994602390706],
            [-77.07172257284171, -12.049723539919528],
            [-77.07188057335554, -12.049515198179588],
            [-77.07205869393228, -12.049323005096932],
            [-77.07225521916607, -12.049148811559446],
            [-77.07246825641879, -12.048994295109564],
            [-77.0726957540471, -12.048860943790006],
            [-77.07293552115989, -12.048750041814484],
            [-77.07318524871647, -12.048662657201252],
            [-77.073442531762, -12.048599631488598],
            [-77.07370489258639, -12.048561571631279],
            [-77.07396980458336, -12.048548844155855]
          ]
        ],
        "type": "Polygon"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -77.07378169807943,
          -12.051296289470883
        ],
        "type": "Point"
      }
    }
  ]
};

// Estilo para el área del mapa
const areaStyle = {
  fillColor: '#f03',
  fillOpacity: 0.2,
  color: '#f03',
  weight: 2
};

// Crear un ícono personalizado para el marcador
const createCustomIcon = () => {
  return new Icon({
    iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f03a3a"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: 'custom-marker-icon'
  });
};

export default function LocationMap() {
  // Coordenadas del centro del área delimitada
  const center: [number, number] = [-12.051296, -77.073782]; // Latitud, Longitud
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  
  // Efecto para manejar la carga del mapa
  useEffect(() => {
    // Forzar un pequeño retraso para asegurar que el contenedor del mapa esté listo
    const timer = setTimeout(() => {
      setMapReady(true);
      // Ajustar el mapa después de que se haya renderizado
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Manejar el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        // Pequeño retraso para asegurar que el contenedor tenga el tamaño correcto
        setTimeout(() => {
          mapRef.current?.invalidateSize();
        }, 100);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const zoom = 18; // Nivel de zoom inicial
  
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dancing text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Nuestra <span className="text-red-500">Ubicación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visítanos en nuestro estudio o contáctanos para más información sobre nuestras clases.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 w-full relative z-0">
            {mapReady && (
            <MapContainer 
              center={center} 
              zoom={zoom} 
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
              scrollWheelZoom={false}
              className="z-0"
              ref={(map) => {
                if (map) {
                  mapRef.current = map;
                  // Asegurarse de que el mapa se ajuste al contenedor
                  setTimeout(() => {
                    map.invalidateSize();
                  }, 100);
                }
              }}
              whenReady={() => {
                // Asegurarse de que el mapa se ajuste después de cargar
                setTimeout(() => {
                  if (mapRef.current) {
                    mapRef.current.invalidateSize();
                  }
                }, 100);
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Área delimitada */}
              <GeoJSON 
                data={locationData as any} 
                style={{
                  fillColor: '#f59e0b',
                  weight: 2,
                  opacity: 1,
                  color: '#d97706',
                  fillOpacity: 0.2
                }}
                eventHandlers={{
                  add: () => {
                    // Asegurarse de que el mapa se ajuste después de cargar el GeoJSON
                    setTimeout(() => {
                      if (mapRef.current) {
                        const bounds = (locationData as any).features[0].geometry.coordinates[0].map(
                          (coord: [number, number]) => [coord[1], coord[0]]
                        );
                        mapRef.current.fitBounds(bounds, { padding: [20, 20] });
                      }
                    }, 100);
                  }
                }}
              />
              
              {/* Marcador de ubicación */}
              <Marker 
                position={center} 
                icon={createCustomIcon()}
                eventHandlers={{
                  add: (e: L.LeafletEvent) => {
                    // Forzar la actualización del ícono después de que se agregue al mapa
                    const marker = e.target as L.Marker;
                    marker.setIcon(createCustomIcon());
                  }
                }}
              >
                <Popup closeButton={false} className="custom-popup">
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-800">Escuela de Baile</h3>
                    <p className="text-sm text-gray-700">Clases de Salsa y Bachata</p>
                    <p className="text-sm text-gray-600 mt-1">¡Te esperamos!</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            )}
            
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
              <a 
                href="https://maps.app.goo.gl/?q=-12.051296,-77.073782" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white hover:bg-gray-50 p-2 rounded-lg shadow-md text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors border border-gray-200"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-red-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Abrir en Maps</span>
              </a>
            </div>
          </div>
          
          <div className="p-6 md:p-8 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Horario de Atención</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">9:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">Cerrado</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    <span>Calle Eugenio Paredes 2471 (Cipreses/Cercado de Lima)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+51 966 320 353</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@escueladebaile.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
