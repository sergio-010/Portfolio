import Image from "next/image";


const Introduction = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-minimal-4xl md:text-6xl font-light text-minimal-text tracking-tight">
                            Sergio Picon
                        </h1>
                        <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                        <p className="text-minimal-lg text-minimal-gray max-w-2xl mx-auto font-light">
                            Frontend Developer
                        </p>
                    </div>

                    <p className="text-minimal-base text-minimal-gray max-w-xl mx-auto leading-relaxed">
                        Creating modern and dynamic web applications with React and Next.js.
                        Passionate about solving problems and optimizing user experience.
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