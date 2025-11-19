'use client';
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, SVGProps, useState } from "react";

const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'MENÚ', href: '/page/menu' },
    { name: 'NOSOTROS', href: '/page/nosotros' },
    { name: 'CONTACTO', href: '/page/contactos' }
];



// 2. Definición de tipos para los componentes de iconos
// FC<SVGProps<SVGSVGElement>> tipifica el componente como un componente funcional de React que acepta props de SVG.
const MapPinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const PhoneIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);
const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);
const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);



// Datos de contacto estructurados
const contactInfo = [
    { icon: MapPin, text: 'La Molina Mz. P Lt.3, Chimbote, Peru 02710', link: '#' },
    { icon: Clock, text: 'Atención desde las 8:00 am. a 5:00 pm.', link: '#' },
];
const phoneInfo = { icon: Phone, text: '043 635822', link: 'tel:043635822' };


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para abrir/cerrar menú
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Función para cerrar el menú al hacer clic en un enlace (en móvil)
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <div className="bg-gray-100 text-black border-b border-gray-200 py-2 text-xs hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                    {/* Ubicación y Horario */}
                    <div className="flex space-x-6">
                        {contactInfo.map((item, index) => (
                            <span key={index} className="flex items-center space-x-2">
                                <item.icon className="w-4 h-4 text-amber-500" />
                                <span>{item.text}</span>
                            </span>
                        ))}
                    </div>

                    {/* Teléfono */}
                    <div className="flex space-x-6">
                        <a href={phoneInfo.link} className="flex items-center space-x-2 hover:text-amber-500 transition">
                            <phoneInfo.icon className="w-4 h-4 text-amber-500" />
                            <span>{phoneInfo.text}</span>
                        </a>
                    </div>
                </div>
            </div>


            <nav className="bg-white text-black shadow-lg sticky font-sans top-0 z-50 transition-all duration-300">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

                    {/* Logo/Brand Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex" onClick={closeMenu}>
                            <div className="relative w-18 h-18 lg:w-20 lg:h-20 flex-shrink-0">
                                <Image
                                    src={'/logo_.png'}
                                    alt="logo bunker de verlay"
                                    width={500}
                                    height={500}
                                />

                            </div>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                // Tailwind: Subrayado sutil al pasar el mouse
                                className="hover:text-amber-500 uppercase tracking-wider transition duration-150 ease-in-out relative group"
                            >
                                {link.name}
                                {/* Efecto de subrayado que simula el de la imagen (un poco más sofisticado) */}
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent group-hover:bg-amber-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Iconos Sociales (Derecha - Solo Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://www.facebook.com/elbunkerdeverlay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-amber-500 transition duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/elbunkerdeverlay/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-amber-500 transition duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>


                    {/* Botón de Menú Móvil (Hamburguesa) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-amber-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition duration-150"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {/* Mostrar icono de cerrar si el menú está abierto, sino icono de menú */}
                            {isMenuOpen ? (
                                <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
                {/* Menú Móvil (Se desliza hacia abajo) */}
                <div
                    className={`md:hidden absolute w-full bg-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0' // Controla la altura y visibilidad
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="block px-3 py-3 text-base font-medium text-center uppercase rounded-lg text-black hover:bg-gray-200 hover:text-amber-500 transition duration-150"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs space-y-2 text-black px-4">
                        <p className="flex items-center justify-center space-x-2">
                            <PhoneIcon className="w-4 h-4 text-black" />
                            <a href="tel:043 635822" className="hover:text-amber-800">043 635822</a>
                        </p>
                        <p className="flex items-center justify-center space-x-2">
                            <MapPinIcon className="w-4 h-4 text-black" />
                            <span>La Molina Mz. P Lt.3, Chimbote, Peru 02710</span>
                        </p>
                    </div>
                </div>
            </nav>
        </>

    );
}