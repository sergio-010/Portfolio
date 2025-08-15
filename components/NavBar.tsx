'use client'
import { useState, useEffect } from 'react';
import { itemsNavbar } from '../data';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'experience', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            // Cambiar apariencia del navbar basado en scroll
            setScrolled(window.scrollY > 50);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const targetId = link.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation - Floating Bar */}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
                <div className="flex items-center gap-1 px-6 py-3 bg-black/80 backdrop-blur-xl 
                              border border-yellow-600/20 rounded-full shadow-2xl">
                    {itemsNavbar.map((item) => {
                        const sectionId = item.link.replace('#', '');
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                onClick={(e) => handleClick(e, item.link)}
                                className={`group relative p-3 rounded-full transition-all duration-300 hover:scale-110
                                          ${isActive
                                        ? 'bg-yellow-600 text-black shadow-lg shadow-yellow-600/25'
                                        : 'text-white/70 hover:text-yellow-600 hover:bg-yellow-600/10'}`}
                                title={item.title}
                            >
                                <div className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                                              px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                                              border border-yellow-600/20">
                                    {item.title}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                                                  w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent 
                                                  border-t-black/90"></div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Navigation - Top Bar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300
                           ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-yellow-600/20' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl">
                        <span className="text-yellow-600">S</span>ergio
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white hover:text-yellow-600 transition-colors duration-300"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl 
                                  border-b border-yellow-600/20 shadow-2xl">
                        <div className="flex flex-col space-y-2 p-6">
                            {itemsNavbar.map((item) => {
                                const sectionId = item.link.replace('#', '');
                                const isActive = activeSection === sectionId;

                                return (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        onClick={(e) => handleClick(e, item.link)}
                                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                                                  ${isActive
                                                ? 'bg-yellow-600 text-black'
                                                : 'text-white/80 hover:text-yellow-600 hover:bg-yellow-600/10'}`}
                                    >
                                        <div className="w-5 h-5">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{item.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}

export default NavBar;
