export default function SeccionCabecera({
    title = "",
    backgroundImage = "",
    overlay = true,
    overlayOpacity = "bg-opacity-20"
}:{
    title?: string;
    backgroundImage?: string;
    overlay?: boolean;
    overlayOpacity?: string;
}) {
    return (
    <section className="relative w-full h-96 overflow-hidden">
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay oscuro */}
            {overlay && (
                <div className={`absolute inset-0 bg-black/50 ${overlayOpacity}`}></div>
            )}
        </div>

        {/* Contenido - Título */}
        <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif text-center px-4">
                {title}
            </h1>
        </div>
    </section>);
}