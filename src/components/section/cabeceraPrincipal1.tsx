import Link from "next/link";

// 1. Definición de la Interfaz para los elementos destacados del menú
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// 2. Datos de los elementos de menú para la columna izquierda
const featuredMenuItems: MenuItem[] = [
  {
    name: 'Tiramisu Elaziz Zuri',
    description: 'Spain',
    price: '14€',
  },
  {
    name: 'Sea Bass',
    description: 'Baked with fresh herbs',
    price: '23€',
  },
];


export default function CaberaPrincipal(){
return (
    // Contenedor principal con el fondo oscuro e imagen de fondo
    <div
      className="relative min-h-[80vh] flex items-center bg-cover bg-center text-white"
      style={{
        // Asegúrate de que esta URL apunte a tu imagen de fondo en /public/images/
        backgroundImage: "url('/ceviche.png')",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Contenedor del contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Contenido centrado que imita la estructura de dos columnas */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start pt-10 md:pt-20">
          
          {/* Columna Izquierda: Menú Destacado */}
          <div className="mb-10 md:mb-0 text-left text-opacity-70 text-white">
          </div>
          
          {/* Columna Derecha: Título y Botón */}
          {/* Usamos flex-col y items-center/items-end para alinear el texto y el botón */}
          <div className="flex flex-col items-center md:items-end md:mr-32">
            <h2 className="text-7xl sm:text-8xl font-bold uppercase tracking-tight mb-8">
              EL BUNKER 
            </h2>
            <h1 className="text-7xl sm:text-8xl font-serif font-light mb-2 uppercase tracking-tight">
              DE VERLAY
            </h1>
            
            {/* Botón MENU */}
            <button className="px-10 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300">
              <Link href={'/page/menu'}>
              Menu
              </Link>
            </button>
          </div>
        </div>
      </div>
      
      {/* Elemento de estilización vertical a la derecha (opcional) */}
      <div className="absolute right-0 top-0 h-full w-px bg-white opacity-20 hidden lg:block"></div>
    </div>
  );
}