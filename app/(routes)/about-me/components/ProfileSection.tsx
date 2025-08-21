const ProfileSection = () => {
    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
                <h2 className="text-minimal-2xl md:text-minimal-3xl font-light text-minimal-text tracking-wide mb-6">
                    Acerca de Mí
                </h2>
                <div className="w-16 h-px bg-minimal-text mx-auto mb-8"></div>

                <div className="space-y-6 text-minimal-base text-minimal-gray leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Ingeniero en Sistemas y desarrollador frontend con <strong>2+ años de experiencia</strong>,
                        especializado en la creación de soluciones tecnológicas de alto rendimiento.
                        Me apasiona la mejora continua, la optimización de aplicaciones y el diseño de
                        experiencias intuitivas que superen las expectativas del usuario.
                    </p>

                    <p>
                        En cada proyecto, mi enfoque está en resolver problemas complejos con calidad,
                        eficiencia y visión estratégica, generando un impacto real y sostenible.
                        Trabajo con tecnologías modernas como <strong>React</strong>, <strong>Next.js</strong>,
                        <strong>TypeScript</strong>, <strong>Tailwind CSS</strong> y <strong>Node.js</strong>.
                    </p>

                    <p>
                        He colaborado con equipos multidisciplinarios ágiles en empresas como
                        <strong>Ant Pack</strong>, <strong>Vaseprint</strong> y <strong>Evalua</strong>,
                        desarrollando desde componentes reutilizables hasta aplicaciones completas
                        con integración de APIs y optimización de rendimiento.
                    </p>
                </div>
            </div>

            {/* Información de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                    <h3 className="text-minimal-lg font-light text-minimal-text">Email</h3>
                    <p className="text-minimal-sm text-minimal-gray">piconsergio010@gmail.com</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-minimal-lg font-light text-minimal-text">Teléfono</h3>
                    <p className="text-minimal-sm text-minimal-gray">(+57) 320 343 9111</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-minimal-lg font-light text-minimal-text">Ubicación</h3>
                    <p className="text-minimal-sm text-minimal-gray">Colombia</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
