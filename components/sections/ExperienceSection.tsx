import { dataAboutPage } from "@/data";

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-yellow-600 font-light text-sm uppercase tracking-[0.3em] mb-6">
                            Experiencia
                        </p>
                        <h2 className="text-6xl md:text-7xl font-extralight text-white mb-8">
                            Trayectoria
                            <span className="block text-yellow-600">Profesional</span>
                        </h2>
                        <div className="w-20 h-px bg-yellow-600 mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-yellow-600/30 hidden md:block"></div>

                        <div className="space-y-12">
                            {dataAboutPage.map((data, index) => (
                                <div key={data.id} className="relative md:pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 w-4 h-4 bg-yellow-600 rounded-full border-4 border-black hidden md:block"></div>

                                    <div className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10">
                                        <div className="grid md:grid-cols-4 gap-6">
                                            <div className="md:col-span-1">
                                                <div className="text-yellow-600 text-sm uppercase tracking-wider font-light">
                                                    {data.date}
                                                </div>
                                            </div>
                                            <div className="md:col-span-3 space-y-4">
                                                <h3 className="text-xl text-white font-light">
                                                    {data.title}
                                                </h3>
                                                <p className="text-yellow-600 font-medium">
                                                    {data.subtitle}
                                                </p>
                                                <div className="w-16 h-px bg-yellow-600/50"></div>
                                                <p className="text-base text-white/80 leading-relaxed">
                                                    {data.description}
                                                </p>
                                            </div>
                                        </div>
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

export default ExperienceSection;
