

export default function NuestraHistoriaCorto() {


    return (
       <section className="py-32 bg-white ">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 pt-0 pb-12 border-b-2 border-slate-100">
                    <h3 className="text-6xl lg:text-7xl font-normal text-slate-800 mb-6 leading-tight">
                        {/* Primera palabra: Muy negrita y ultra-espaciada */}
                        <span className="font-black font-bold uppercase tracking-tight block sm:inline-block">
                            Nuestra
                        </span>
                        {/* Segunda palabra: Fuente serif y extra-ligera para el máximo contraste minimalista */}
                        <span className="font-serif font-extralight uppercase block sm:inline-block ml-0 sm:ml-4">
                            Historia
                        </span>
                    </h3>

                    {/* Párrafo con seguimiento de letra ligeramente más ancho y fuente más grande (text-xl) */}
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wider mt-4">
                        &quot;El Bunker de Verlay&quot; nace de la pasión inquebrantable por el mar y la cocina peruana. Desde nuestros inicios, nos hemos dedicado a ofrecer el ceviche más fresco, utilizando solo insumos del día y la receta tradicional que nos define. Somos un refugio para los amantes del sabor auténtico.
                    </p>
                </div>
            </div>
        </section>
    );
}