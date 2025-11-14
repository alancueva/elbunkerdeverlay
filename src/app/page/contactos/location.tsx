import { MapPin } from 'lucide-react';

const LocationGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
        
        {/* Columna Izquierda: Información (1/3 del espacio) */}
        <div className="bg-red-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
          {/* Decoración de fondo suave */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-10 -translate-y-10"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-800/50 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-red-700">
              <MapPin size={16} />
              <span>Encuéntranos</span>
            </div>

            <h2 className="text-4xl font-bold mb-2">Dirección</h2>
            <div className="w-16 h-1 bg-white mb-8 opacity-50"></div>

            <div className="space-y-4 text-red-50">
              <h3 className="text-xl font-semibold text-white">El Bunker de Verlay</h3>
              <p className="text-lg">La Molina Mz. P Lt.3</p>
              <p className="text-lg">Chimbote, Perú 02710</p>
            </div>

            {/* <button className="mt-10 flex items-center justify-center gap-2 w-full bg-white text-red-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all">
              <Navigation size={20} />
              <a href="https://maps.google.com/maps?q=El+Bunker+de+Verlay+Chimbote&t=&z=16&ie=UTF8&iwloc=&output=embed" target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
              </a>
            </button> */}
          </div>
        </div>

        {/* Columna Derecha: Mapa Grande (2/3 del espacio) */}
        <div className="col-span-1 lg:col-span-2 relative h-80 lg:h-auto">
          <iframe
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            title="Mapa Ubicación"
            scrolling="no"
            src="https://maps.google.com/maps?q=El+Bunker+de+Verlay+Chimbote&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default LocationGrid;