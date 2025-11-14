
import { Facebook, Instagram, Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Define los enlaces del footer, replicando el nav
    const footerLinks = [
        { name: 'INICIO', href: '/' },
        { name: 'MENU', href: '/page/menu' },
        { name: 'NOSOTROS', href: '/page/nosotros' },
        { name: 'CONTACTO', href: '/page/contactos' },
    ];

       // Datos de contacto estructurados para ser iterados
    const contactData = [
        { icon: Phone, label: 'Fono Búnker', value: '043 635822', link: 'tel:+5143635822' },
        { icon: Phone, label: 'Pedidos (WhatsApp)', value: '912773256', link: 'https://wa.me/51912773256' },
        { icon: Clock, label: 'Atención', value: 'Lun-Dom: 8:00 am. - 5:00 pm.' },
        { icon: MapPin, label: 'Ubicación', value: 'La Molina Mz. P Lt.3, Chimbote, Peru 02710', bold: true },
    ];


    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Sección Principal */}
            <div className="max-w-7xl mx-auto px-5 py-15">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo y Descripción */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="relative w-25 h-25 md:w-40 md:h-40 flex-shrink-0">
                                <Image
                                    src="/logo_.png"
                                    alt="Logo VC Parts"
                                    fill
                                    className="object-contain rounded-lg transition-transform duration-200 hover:scale-105"
                                    priority
                                />
                            </div>

                        </div>
                        <p className="text-sm leading-relaxed">
                            Restaurante Cevicheria
                            <br />
                            Especialistas en la auténtica sazón peruana.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Explorar</h4>
                        <div className="flex flex-col space-y-3 text-lg">
                            {footerLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="hover:text-white transition-colors duration-200">
                                    {link.name}
                                </Link>
                            ))}                            
                        </div>
                    </div>

                    {/* Información de Contacto */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Contacto</h4>
                        <div className="space-y-4">
                            {contactData.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <item.icon size={20} className="text-amber-500 flex-shrink-0 mt-0.5 mr-3" />
                                    <a 
                                        href={item.link || '#'} 
                                        target={item.link && item.link.startsWith('http') ? "_blank" : "_self"}
                                        className={`text-sm ${item.bold ? 'text-white font-medium hover:text-amber-400' : 'hover:text-white'}`}
                                    >
                                        <span className="block">{item.label}:</span>
                                        <span className={`block ${item.bold ? 'text-base' : ''}`}>{item.value}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* Redes Sociales */}
                        <div className="flex space-x-4 pt-4">
                            <a href="https://www.instagram.com/elbunkerdeverlay/" target="_blank" className="hover:text-white transition-colors duration-200">
                                <Facebook size={20} />
                            </a>
                            {/* <a href="#" className="hover:text-white transition-colors duration-200">
                                <Twitter size={20} />
                            </a> */}
                            <a href="https://www.instagram.com/elbunkerdeverlay/" target="_blank" className="hover:text-white transition-colors duration-200">
                                <Instagram size={20} />
                            </a>
                            {/* <a href="#" className="hover:text-white transition-colors duration-200">
                                <Youtube size={20} />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>Copyright © {currentYear} El Bunker de Verlay</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <span>Diseño web:</span>
                            <a href="https://alancueva.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <span className="text-gray-300 font-medium"> Alan Cueva</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}