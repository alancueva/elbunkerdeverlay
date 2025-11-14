import Image from 'next/image';

export default function GaleriaPrincipal() {
    const images = [
        {
            id: 1,
            src: '/galeria/images.jpg',
            alt: 'Ceviche fresco servido en un plato hondo',
            span: 'lg:row-span-2'
        },
        {
            id: 2,
            src: '/galeria/imagen_2.jpg',
            alt: 'Pescado entero frito con guarnición de ensalada y yucas',
            span: 'lg:col-span-1'
        },
        {
            id: 3,
            src: '/galeria/imagen_3.jpg',
            alt: 'Primer plano de un cóctel pisco sour con limón',
            span: 'lg:col-span-1'
        },
        {
            id: 4,
            src: '/galeria/imagen_11.jpg',
            alt: 'Primer plano de un cóctel pisco sour con limón',
            span: 'lg:col-span-1'
        },
        {
            id: 5,
            src: '/galeria/imagen_4.jpg',
            alt: 'Ambiente interior del restaurante con mesas y decoración rústica',
            span: 'lg:col-span-2'
        },
        {
            id: 6,
            src: '/galeria/imagen_5.jpg',
            alt: 'Jalea mixta con mariscos y salsa criolla',
            span: 'lg:col-span-1'
        },
        {
            id: 7,
            src: '/galeria/imagen_6.jpg',
            alt: 'Detalle de manos preparando un ceviche',
            span: 'lg:col-span-1'
        },
        {
            id: 8,
            src: '/galeria/imagen_7.jpg',
            alt: 'Vista exterior del restaurante El Bunker de Verlay',
            span: 'lg:col-span-1'
        },
        {
            id: 9,
            src: '/galeria/imagen_12.jpg',
            alt: 'Arroz con mariscos servido en una paellera',
            span: 'lg:row-span-2'
        },
        {
            id: 10,
            src: '/galeria/imagen_9.jpg',
            alt: 'Causa rellena de pulpa de cangrejo',
            span: 'lg:row-span-2'
        },
        {
            id: 11,
            src: '/galeria/imagen_13.jpg',
            alt: 'Causa rellena de pulpa de cangrejo',
            span: 'lg:col-span-2'
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                 <h3 className="text-6xl lg:text-7xl font-normal text-center text-slate-800 mb-6 leading-tight">
                        {/* Primera palabra: Muy negrita y ultra-espaciada */}
                        <span className="font-black font-bold uppercase tracking-tight block sm:inline-block">
                            Nuestra
                        </span>
                        {/* Segunda palabra: Fuente serif y extra-ligera para el máximo contraste minimalista */}
                        <span className="font-serif font-extralight uppercase block sm:inline-block ml-0 sm:ml-4">
                            Galería
                        </span>
                    </h3>

                {/* Grid de Galería */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className={`${image.span} rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}