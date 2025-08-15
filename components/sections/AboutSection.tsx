'use client'
import { dataCounter } from "@/data";
import CountUp from "react-countup";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-yellow-600 font-light text-sm uppercase tracking-[0.3em] mb-6">
                            Sobre Mí
                        </p>
                        <h2 className="text-6xl md:text-7xl font-extralight text-white mb-8">
                            Creando
                            <span className="block text-yellow-600">Excelencia Digital</span>
                        </h2>
                        <div className="w-20 h-px bg-yellow-600 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-12 hover:scale-[1.02] transition-all duration-300">
                                <div className="space-y-8">
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        Soy Sergio Andrés Picón, Ingeniero de Sistemas graduado de la Fundación Universitaria UNISANGIL 
                                        con experiencia en diseño y desarrollo de sistemas utilizando tecnologías como React y Next.js.
                                    </p>

                                    <p className="text-base text-white/80 leading-relaxed">
                                        Desarrollador frontend con habilidades para crear interfaces de usuario eficientes y escalables, 
                                        y una sólida comprensión de principios de desarrollo web moderno. Actualmente me desempeño como 
                                        profesor de Tecnología e Informática.
                                    </p>

                                    <p className="text-base text-white/80 leading-relaxed">
                                        Mi experiencia incluye el desarrollo de componentes reutilizables con React, implementación de 
                                        funcionalidades interactivas, y optimización de rendimiento. Me enfoco en crear soluciones 
                                        web modernas que combinen funcionalidad con excelencia estética.
                                    </p>
                                </div>
                            </div>

                            {/* Skills section */}
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 hover:scale-[1.02] transition-all duration-300">
                                    <h3 className="text-xl text-yellow-600 mb-6 font-light">Tecnologías Frontend</h3>
                                    <ul className="space-y-3 text-white/80">
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            React & Next.js
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            JavaScript & TypeScript
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            HTML & CSS
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            Tailwind CSS
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 hover:scale-[1.02] transition-all duration-300">
                                    <h3 className="text-xl text-yellow-600 mb-6 font-light">Herramientas & Otros</h3>
                                    <ul className="space-y-3 text-white/80">
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            Git & GitHub
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            Desarrollo de Software
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            Redes y Ciberseguridad
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1 h-1 bg-yellow-600 rounded-full mr-4"></div>
                                            Oracle (Curso certificado)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stats sidebar */}
                        <div className="space-y-8">
                            {dataCounter.map(({ id, endCounter, text }) => (
                                <div key={id} className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 text-center hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10">
                                    <div className="space-y-4">
                                        <div className="text-4xl font-extralight text-yellow-600">
                                            <CountUp end={endCounter} start={0} duration={3} />
                                        </div>
                                        <div className="w-12 h-px bg-yellow-600 mx-auto"></div>
                                        <p className="text-sm text-white/70 tracking-wider uppercase font-light">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
