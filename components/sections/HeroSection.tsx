const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Subtle background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-40 h-40 bg-yellow-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-600/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center min-h-screen">
                        {/* Centered content */}
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <div>
                                    <p className="text-yellow-600 text-sm uppercase tracking-[0.3em] mb-6 font-light">
                                        Ingeniero de Sistemas & Desarrollador Frontend
                                    </p>
                                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-8">
                                        Sergio Andrés
                                        <span className="block text-yellow-600">Picón</span>
                                    </h1>
                                    <div className="w-20 h-px bg-yellow-600 mb-8 mx-auto"></div>
                                </div>

                                <p className="text-lg text-white/85 max-w-2xl leading-relaxed font-light mx-auto">
                                    Desarrollador frontend especializado en React y Next.js con experiencia en diseño 
                                    y desarrollo de interfaces de usuario eficientes. Creando soluciones web modernas 
                                    que combinan funcionalidad técnica con excelencia estética.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="#portfolio"
                                    className="bg-yellow-600 text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-yellow-500 transition-all duration-300 hover:scale-105 inline-block text-center"
                                >
                                    Ver Portafolio
                                </a>
                                <a
                                    href="/CV-Picon Sergio Andres.pdf"
                                    download="Sergio-Picon-CV"
                                    className="border border-yellow-600/40 text-white px-8 py-4 text-sm uppercase tracking-wider font-light hover:bg-yellow-600/10 hover:border-yellow-600 transition-all duration-300 hover:scale-105 inline-block text-center"
                                >
                                    Descargar CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-white/50 text-xs uppercase tracking-wider">Scroll</p>
                            <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
