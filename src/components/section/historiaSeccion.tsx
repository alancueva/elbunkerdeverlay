
export default function HistorySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Nuestra Historia</h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Contenido de la Historia - Ampliado, natural y con alma */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-lg">
            &quot;El Bunker de Verlay&quot; no nació en una oficina, sino en la cubierta de un barco pesquero 
            en 1987. Don Verlay, pescador de toda la vida, cansado de ver cómo el mejor pescado 
            terminaba en mercados lejanos, decidió abrir un pequeño local en Chimbote donde el mar 
            llegara directamente al plato, sin escalas.
          </p>

          <p className="text-lg">
            Con una mesa de madera rescatada del muelle y una cocina improvisada, empezó a servir 
            ceviche hecho con lo que él mismo había atrapado esa madrugada. La regla era clara: 
            <em>si no salió hoy del mar, no entra al plato</em>. Esa frescura brutal, junto a su 
            receta secreta de leche de tigre, corrió como pólvora entre los pescadores, luego los 
            vecinos, y finalmente los viajeros.
          </p>

          <p className="text-lg">
            El nombre &quot;Bunker&quot; no es casual: el local original era un depósito militar abandonado 
            en la costa, con paredes gruesas y vistas al rompeolas. Lo pintaron de blanco, colgaron 
            redes viejas como cortinas y convirtieron un refugio de guerra en un templo del sabor. 
            Hoy, ese espíritu sigue vivo: rudo por fuera, impecable por dentro.
          </p>

          <p className="text-lg">
            Tres generaciones después, seguimos cortando el pescado a cuchillo, exprimimos limón 
            sutil a mano y respetamos el silencio de 10 minutos que necesita el ceviche para 
            &quot;despertar&quot;. No hay freezer, no hay atajos. Solo mar, fuego y tradición.
          </p>

          <p className="text-lg font-medium text-gray-900">
            El Bunker de Verlay no es un restaurante. Es un pacto entre el océano y quien se sienta 
            a la mesa: aquí, el ceviche no se come, se honra.
          </p>
        </div>

        {/* Línea decorativa final */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-px bg-gray-300"></div>
        </div>

        {/* Año de fundación */}
        <div className="text-center mt-12">
          <p className="text-6xl font-serif text-gray-300">1987</p>
        </div>
      </div>
    </section>
  );
}