'use client'
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
    const educationData = [
        {
            id: 1,
            title: "Ingeniería de Sistemas",
            institution: "Fundación Universitaria UNISANGIL",
            period: "2018 - 2024",
            description: "Formación integral en desarrollo de sistemas, programación y tecnologías modernas.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            id: 2,
            title: "Diplomado en Desarrollo de Software",
            institution: "Especialización en Redes y Ciberseguridad",
            period: "2023",
            description: "Conocimientos avanzados en desarrollo de software, redes y ciberseguridad.",
            icon: <Award className="w-6 h-6" />
        },
        {
            id: 3,
            title: "Curso de Oracle Next Education",
            institution: "Oracle + Alura",
            period: "Marzo 2023",
            description: "Formación especializada en desarrollo frontend con énfasis en lógica de programación, arquitectura CSS, HTML, JavaScript y React.",
            icon: <BookOpen className="w-6 h-6" />
        }
    ];

    return (
        <section id="education" className="py-20 bg-gray-900/50 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-yellow-600 font-light text-sm uppercase tracking-[0.3em] mb-6">
                            Educación
                        </p>
                        <h2 className="text-6xl md:text-7xl font-extralight text-white mb-8">
                            Formación
                            <span className="block text-yellow-600">Académica</span>
                        </h2>
                        <div className="w-20 h-px bg-yellow-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {educationData.map((item) => (
                            <div key={item.id} className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600">
                                        {item.icon}
                                    </div>
                                    <div className="text-yellow-600 text-sm font-light">
                                        {item.period}
                                    </div>
                                </div>

                                <h3 className="text-xl text-white font-light mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-yellow-600 font-medium mb-4">
                                    {item.institution}
                                </p>

                                <div className="w-16 h-px bg-yellow-600/50 mb-4"></div>

                                <p className="text-base text-white/80 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Idiomas */}
                    <div className="mt-20">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-light text-white mb-4">Idiomas</h3>
                            <div className="w-16 h-px bg-yellow-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 text-center hover:scale-[1.02] transition-all duration-300">
                                <h4 className="text-xl text-yellow-600 font-light mb-2">Español</h4>
                                <p className="text-white/80">Nativo</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 text-center hover:scale-[1.02] transition-all duration-300">
                                <h4 className="text-xl text-yellow-600 font-light mb-2">Inglés</h4>
                                <p className="text-white/80">Nivel B1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
