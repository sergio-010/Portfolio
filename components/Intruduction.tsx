import Image from "next/image";


const Introduction = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-minimal-4xl md:text-6xl font-light text-minimal-text tracking-tight">
                            Sergio Andrés Picon
                        </h1>
                        <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                        <p className="text-minimal-lg text-minimal-gray max-w-2xl mx-auto font-light">
                            Desarrollador Frontend e Ingeniero en Sistemas
                        </p>
                    </div>

                    <p className="text-minimal-base text-minimal-gray max-w-xl mx-auto leading-relaxed">
                        Ingeniero en Sistemas y desarrollador frontend con 2+ años de experiencia.
                        Especializado en la creación de soluciones tecnológicas de alto rendimiento
                        con React, Next.js y tecnologías modernas. Apasionado por la mejora continua,
                        la optimización de aplicaciones y el diseño de experiencias intuitivas.
                    </p>

                    <div className="flex items-center justify-center gap-8 pt-8">
                        <a
                            href="/CV-Picon Sergio Andres.pdf"
                            download="cv"
                            className="text-minimal-sm text-minimal-text hover:text-minimal-accent 
                                     border-b border-transparent hover:border-minimal-accent 
                                     transition-all duration-300 tracking-wide uppercase"
                        >
                            Download CV
                        </a>
                        <a
                            href="/contact-me"
                            className="text-minimal-sm text-minimal-text hover:text-minimal-accent 
                                     border-b border-transparent hover:border-minimal-accent 
                                     transition-all duration-300 tracking-wide uppercase"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;