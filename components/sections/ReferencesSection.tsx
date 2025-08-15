'use client'
import { Phone, User } from 'lucide-react';

const ReferencesSection = () => {
    const references = [
        {
            id: 1,
            name: "Juan Díaz",
            phone: "(57) 3507914076",
            icon: <User className="w-5 h-5" />
        },
        {
            id: 2,
            name: "Jennifer Garrido", 
            phone: "(57) 3214740140",
            icon: <User className="w-5 h-5" />
        }
    ];

    return (
        <section className="py-20 bg-gray-900/30 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-yellow-600 font-light text-sm uppercase tracking-[0.3em] mb-6">
                            Referencias
                        </p>
                        <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8">
                            Referencias
                            <span className="block text-yellow-600">Profesionales</span>
                        </h2>
                        <div className="w-20 h-px bg-yellow-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {references.map((reference) => (
                            <div key={reference.id} className="bg-white/5 backdrop-blur-xl border border-yellow-600/20 rounded-lg p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600">
                                        {reference.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-light mb-2">
                                            {reference.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-yellow-600">
                                            <Phone className="w-4 h-4" />
                                            <span className="font-medium">{reference.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReferencesSection;
