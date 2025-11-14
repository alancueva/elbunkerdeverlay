import React from 'react';

// 1. Definición de la Interfaz (Simplificada sin imagenUrl)
interface CevicheItem {
  id: number;
  nombre: string;
  detalle: string;
}

// 2. Datos de la Carta (con tipado CevicheItem[])
const ceviches: CevicheItem[] = [
  {
    id: 1,
    nombre: "Ceviche de Maruchitas",
    detalle: "Fresco, ácido y crocante. La estrella de la casa. (S/. 35.00)"
  },
  {
    id: 2,
    nombre: "Ceviche de Conchas Negras",
    detalle: "Intenso sabor a mar, con el toque picante y cítrico ideal. (S/. 40.00)"
  },
  {
    id: 3,
    nombre: "Ceviche de Pescado Blanco",
    detalle: "Clásico y elegante. El pescado más fresco en leche de tigre. (S/. 32.00)"
  },
  {
    id: 4,
    nombre: "Ceviche de Caballa Salpreso",
    detalle: "Caballa curada con ají amarillo y un toque de cebolla roja. (S/. 30.00)"
  },
  {
    id: 5,
    nombre: "Ceviche Mixto",
    detalle: "Una explosión de sabor con pescado, calamar y conchas. (S/. 38.00)"
  },
  {
    id: 6,
    nombre: "Ceviche de Cangrejo",
    detalle: "Delicada carne de cangrejo con un toque de culantro fresco. (S/. 45.00)"
  },
  {
    id: 7,
    nombre: "Ceviche de Pulpo",
    detalle: "Pulpo tierno marinado con ají limo y un golpe de limón. (S/. 42.00)"
  },
  {
    id: 8,
    nombre: "Ceviche de Langostinos",
    detalle: "Langostinos pochados, cremosos y bañados en leche de tigre. (S/. 39.00)"
  },
];

const CevicheMenu: React.FC = () => {
  return (
    <section className="py-20 bg-white font-['Inter']">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal de la Sección - Formal y Centrado */}
        <div className="text-center mb-16 border-b pb-4 border-slate-200">
          <p className="text-base font-medium text-slate-800 uppercase tracking-widest mb-1">
            Carta Principal
          </p>
          <h2 className="text-6xl font-extrabold tracking-tight text-slate-800">
            Restaurant Cevichería
          </h2>
          <p className="mt-4 text-xl text-gray-500 italic">
            Selección de Ceviches Frescos
          </p>
        </div>

        {/* Listado de Menú Formal (Dos Columnas en Escritorio) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {ceviches.map((ceviche) => {
            // Separa el detalle del precio para un mejor formato
            const parts = ceviche.detalle.match(/(.*) \((S\/\. [\d\.]+)\)/);
            const detalleLimpio = parts ? parts[1].trim() : ceviche.detalle;
            const precio = parts ? parts[2] : 'Precio No Especificado';

            return (
              <div 
                key={ceviche.id} 
                className="pb-4 border-b border-gray-200"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-xl font-semibold tracking-wide ${ceviche.id === 1 ? 'text-slate-800' : 'text-slate-800'}`}>
                    {ceviche.nombre}
                  </h3>
                  {/* Precio alineado a la derecha, resaltado pero elegante */}
                  <span className="text-xl font-bold text-black ml-4 flex-shrink-0">
                    {precio}
                  </span>
                </div>
                {/* Detalle más discreto */}
                <p className="text-sm text-gray-600 italic">
                  {detalleLimpio}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Nota del Chef */}
        <div className="mt-16 text-center text-sm text-gray-500">
            <p>* Todos nuestros platos son preparados al momento con ingredientes 100% frescos.</p>
        </div>

      </div>
    </section>
  );
};

export default CevicheMenu;