import { Phone, Clock, Mail, MapPin } from 'lucide-react';
import LocationGrid from './location';

export default function Contactos() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título Principal */}
        {/* <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Contáctanos</h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div> */}

        {/* Grid de Información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Teléfono */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">Teléfono</h3>
            <p className="text-gray-700 text-lg">043 635822</p>
          </div>

          {/* Atención */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">Atención</h3>
            <p className="text-gray-700">Lunes a Domingo</p>
            <p className="text-gray-700">8:00 am - 5:00 pm</p>
          </div>

          {/* Correo */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center">
                {/* <Mail className="w-10 h-10 text-red-600" /> */}
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">Pedidos</h3>
            <p className="text-gray-700 text-lg">912773256</p>
          </div>
        </div>

        {/* Grid de Dirección y Mapa */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-800 text-white rounded-lg p-12 flex flex-col justify-center">
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-serif mb-6">Dirección</h3>
                <p className="text-lg mt-2">
                  La Molina Mz. P Lt.3<br />
                  Chimbote, Perú 02710
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.8356789012345!2d-78.5059615!3d-9.1474462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab859079c95307%3A0xfe4e90fad83907c3!2sEl%20BUNKER%20DE%20VERLAY!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            ></iframe>
          </div>
        </div> */}

        <LocationGrid />

        {/* Línea decorativa final */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-px bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}



