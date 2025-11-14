'use client';
export default function NotFoundPage() {
  return (
    // Contenedor principal: ocupa la altura completa de la vista, centrado vertical y horizontalmente.
    <div className="flex items-center justify-center min-h-screen bg-white font-['Inter'] px-4">
      <div className="text-center max-w-xl">

        {/* Número 404: Gigante, con bajo contraste para un efecto minimalista y elegante */}
        <p className="text-[12rem] sm:text-[15rem] font-serif font-extralight text-gray-200 leading-none tracking-tight">
          404
        </p>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase tracking-wider -mt-16 sm:-mt-24 mb-4">
          Página No Encontrada
        </h1>

        {/* Mensaje descriptivo */}
        <p className="text-xl text-gray-700 max-w-lg mx-auto leading-relaxed mt-6 mb-8">
          Parece que la URL a la que intentaste acceder no existe o fue movida.
          Utiliza el botón para volver a nuestra página principal.
        </p>

        {/* Botón de Llamada a la Acción (CTA) con color de acento */}
        <button
          onClick={() => window.location.href = "/"} // Simula la navegación a la página de inicio
          className="px-8 py-3 bg-amber-500 text-white font-bold uppercase rounded-xl transition duration-300 transform hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300 tracking-wider text-lg"
        >
          Ir a la Página Principal
        </button>
      </div>
    </div>
  );
}