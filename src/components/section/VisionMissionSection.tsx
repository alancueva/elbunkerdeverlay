
export default function VisionMissionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título Principal */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Nuestra Filosofía</h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Contenedor Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Misión */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif text-gray-900">Misión</h3>
              <div className="w-16 h-px bg-gray-900"></div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Servir el ceviche más fresco del día, cortado a cuchillo, con limón sutil 
                y la leche de tigre que Don Verlay perfeccionó en el muelle.
              </p>
              
              <p>
                No hay freezer, no hay excusas. Solo pescado que nadó esta mañana, 
                tradición viva y sabor que no se negocia.
              </p>

              <p className="font-medium text-gray-900">
                Ser el refugio donde el mar se come crudo, honesto y sin filtros.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif text-gray-900">Visión</h3>
              <div className="w-16 h-px bg-gray-900"></div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Que &quot;Bunker&quot; sea sinónimo de ceviche impecable en toda la costa.
              </p>
              
              <p>
                Crecer sin traicionar: más mesas, misma regla — 
                <em>lo que no salió hoy del mar, no entra</em>.
              </p>

              <p className="font-medium text-gray-900">
                Ser la cevichería que los pescadores recomiendan y los viajeros buscan.
              </p>
            </div>
          </div>
        </div>

        {/* Línea decorativa final */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-px bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}