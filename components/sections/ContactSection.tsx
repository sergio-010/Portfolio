import { dataContact } from "@/data";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-yellow-600 font-light text-sm uppercase tracking-[0.3em] mb-6">
                            Contacto
                        </p>
                        <h2 className="text-6xl md:text-7xl font-extralight text-white mb-8">
                            Creemos Algo
                            <span className="block text-yellow-600">Increíble</span>
                        </h2>
                        <div className="w-20 h-px bg-yellow-600 mx-auto"></div>
                        <p className="text-base text-white/70 max-w-2xl mx-auto mt-8 leading-relaxed">
                            ¿Listo para dar vida a tu visión? Hablemos sobre tu próximo proyecto
                            y creemos algo extraordinario juntos.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl text-white mb-8 font-light">
                                    Ponte en Contacto
                                </h3>

                                {dataContact.map((data) => (
                                    <a
                                        key={data.id}
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-6 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10 group"
                                    >
                                        <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-300">
                                            {data.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white/60 text-sm uppercase tracking-wider mb-1 font-light">
                                                {data.title}
                                            </h4>
                                            <p className="text-white font-medium">
                                                {data.subtitle}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-10">
                            <h3 className="text-2xl text-white mb-8 font-light">
                                Enviar Mensaje
                            </h3>

                            <form
                                action="https://formsubmit.co/piconsergio010@gmail.com"
                                method="POST"
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-yellow-600 text-sm uppercase tracking-wider font-light">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-yellow-600/30
                                                     text-white placeholder-white/40 focus:border-yellow-600 
                                                     focus:outline-none transition-colors font-light"
                                            required
                                            autoComplete="name"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-yellow-600 text-sm uppercase tracking-wider font-light">
                                            Correo
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-0 py-4 bg-transparent border-0 border-b border-yellow-600/30
                                                     text-white placeholder-white/40 focus:border-yellow-600 
                                                     focus:outline-none transition-colors font-light"
                                            required
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="comments" className="block text-yellow-600 text-sm uppercase tracking-wider font-light">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="comments"
                                        name="comments"
                                        rows={6}
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-yellow-600/30
                                                 text-white placeholder-white/40 focus:border-yellow-600 
                                                 focus:outline-none transition-colors resize-none font-light"
                                        required
                                    />
                                </div>

                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        className="bg-yellow-600 text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-yellow-500 transition-all duration-300 hover:scale-105 w-full"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>

                                <input type="hidden" name="_next" value="https://sergio-picon.vercel.app/" />
                                <input type="hidden" name="_captcha" value="false" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
