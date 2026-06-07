import type { Dictionary } from "./types";

export const es: Dictionary = {
    locale: "es",
    intlLocale: "es-CO",
    switchTo: { label: "EN", href: "/en", ariaLabel: "Switch to English" },

    site: {
        name: "Sergio Picón",
        fullName: "Sergio Andrés Picón",
        role: "Ingeniero en Sistemas · Full Stack Developer",
        location: "Colombia — Remoto disponible",
        email: "piconsergio010@gmail.com",
        cvUrl: "/CV-Picon Sergio Andres.pdf",
        languages: "Español — Nativo · Inglés — B1",
        intro:
            "Desarrollador Full Stack con más de 2 años construyendo aplicaciones web de alto rendimiento de extremo a extremo: React y Next.js en el frontend, NestJS y Node.js en el backend, y despliegues en AWS.",
        metaTitle: "Sergio Picón — Full Stack Developer",
        metaDescription:
            "Ingeniero en Sistemas y Desarrollador Full Stack. React y Next.js en frontend, NestJS y Node.js en backend, despliegues en AWS. Remoto desde Colombia.",
    },

    nav: {
        links: [
            { title: "Inicio", href: "#home" },
            { title: "Sobre mí", href: "#about" },
            { title: "Experiencia", href: "#experience" },
            { title: "Educación", href: "#education" },
            { title: "Proyectos", href: "#portfolio" },
            { title: "Contacto", href: "#contact" },
        ],
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
    },

    ui: {
        toLightMode: "Cambiar a modo claro",
        toDarkMode: "Cambiar a modo oscuro",
    },

    hero: {
        viewProjects: "Ver proyectos",
        downloadCv: "Descargar CV",
        scroll: "Scroll",
        available: "Disponible para proyectos",
        locationLabel: "Ubicación",
        localTime: "hora local",
        mainStack: "Stack principal",
    },

    about: {
        label: "Sobre mí",
        titlePre: "De la interfaz",
        titleAccent: "a la infraestructura",
        paragraphs: [
            "Soy Sergio Andrés Picón, Ingeniero en Sistemas graduado de la Fundación Universitaria UNISANGIL. Construyo aplicaciones web de extremo a extremo: desde la interfaz hasta la infraestructura.",
            "En el frontend trabajo con React, Next.js y TypeScript; en el backend con NestJS, Node.js y Prisma sobre PostgreSQL; y despliego en AWS — EC2, S3, IAM y Secrets Manager. He diseñado APIs REST con autenticación JWT y migraciones en producción sin downtime.",
            "Trabajo en equipos ágiles internacionales y remotos, participando en decisiones de arquitectura, revisiones de código y definición de estándares técnicos. Disponible para proyectos full-time o por contrato.",
        ],
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "NestJS",
            "Node.js",
            "Prisma",
            "PostgreSQL",
            "REST APIs",
            "Docker",
            "AWS EC2",
            "AWS S3",
            "IAM",
            "Secrets Manager",
            "Git",
        ],
        stats: [
            { value: 2, suffix: "+", label: "Años de experiencia" },
            { value: 10, suffix: "+", label: "Proyectos completados" },
            { value: 15, label: "Tecnologías dominadas" },
            { value: 3, label: "Empresas colaboradas" },
        ],
    },

    experience: {
        label: "Experiencia",
        titlePre: "Dónde he",
        titleAccent: "construido",
        items: [
            {
                role: "Full Stack Developer",
                company: "Evalua",
                period: "May 2025 — Actualidad",
                description:
                    "Desarrollo de módulos full stack para una plataforma educativa usada por instituciones universitarias a nivel nacional. APIs REST con autenticación JWT y sesiones seguras para múltiples roles, modelado de esquemas con Prisma y migraciones en producción sin downtime, dashboards de visualización de datos, e infraestructura en AWS: EC2, S3, IAM y Secrets Manager. Participación activa en decisiones de arquitectura y revisiones de código.",
                stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "AWS"],
            },
            {
                role: "Desarrollador Frontend",
                company: "Vaseprint",
                period: "Mar 2024 — May 2025",
                description:
                    "Diseño y desarrollo de componentes reutilizables y escalables de UI con React, Next.js, Tailwind CSS y shadcn/ui. Interfaces responsivas y accesibles siguiendo estándares WCAG. Integración de APIs REST con Node.js, NestJS y Prisma, y configuración de entornos de desarrollo y despliegue con Docker.",
                stack: ["Next.js", "Tailwind CSS", "NestJS", "Prisma", "Docker"],
            },
            {
                role: "Desarrollador Frontend Junior",
                company: "Ant Pack",
                period: "Sep 2023 — Feb 2024",
                description:
                    "Desarrollo de proyectos completos con React y Next.js, desde el diseño hasta la implementación final. Componentes reutilizables con enfoque en UX/UI y rendimiento (Core Web Vitals), e investigación y adopción de nuevas tecnologías para optimizar el ciclo de desarrollo.",
                stack: ["React", "Next.js", "Core Web Vitals"],
            },
        ],
    },

    education: {
        label: "Educación",
        titlePre: "Formación",
        titleAccent: "académica",
        items: [
            {
                title: "Ingeniería en Sistemas",
                institution: "Fundación Universitaria UNISANGIL",
                period: "2018 — 2024",
                description:
                    "Graduado con enfoque en desarrollo web moderno y soluciones tecnológicas de alto rendimiento, de la interfaz a la infraestructura.",
            },
            {
                title: "Diplomado en Desarrollo de Software, Redes y Ciberseguridad",
                institution: "Fundación Universitaria UNISANGIL",
                period: "2023",
                description:
                    "Formación especializada en seguridad informática y arquitectura de sistemas, ampliando la visión integral del ciclo de desarrollo.",
            },
        ],
    },

    portfolio: {
        label: "Proyectos",
        titlePre: "Trabajo",
        titleAccent: "seleccionado",
        demoLabel: "Demo",
        githubLabel: "GitHub",
        projects: [
            {
                id: 1,
                title: "Todo List",
                description: "Gestión de tareas con una interfaz simple y directa.",
                image: "/todo.png",
                urlGithub: "https://github.com/sergio-010/Todo-List",
                urlDemo: "https://todo-list-neon-ten.vercel.app/",
                stack: ["React", "TypeScript"],
            },
            {
                id: 2,
                title: "Ecommerce",
                description: "Tienda en línea con catálogo, carrito y backend propio.",
                image: "/ecommerce.png",
                urlGithub: "https://github.com/sergio-010/ecommerce-beer",
                urlDemo: "https://github.com/sergio-010/backend-ecommerce",
                stack: ["Next.js", "Node.js"],
            },
            {
                id: 3,
                title: "Rental Cars",
                description: "Plataforma de alquiler de vehículos con reservas.",
                image: "/Rental.png",
                urlGithub: "https://github.com/sergio-010/Rental-",
                urlDemo: "https://cheo-cars.vercel.app/",
                stack: ["Next.js", "Tailwind CSS"],
            },
            {
                id: 4,
                title: "Portfolio",
                description: "Este sitio: minimalista, animado y hecho a mano.",
                image: "/porfolio.png",
                urlGithub: "https://github.com/sergio-010/Portfolio",
                urlDemo: "https://sergio-picon.vercel.app/",
                stack: ["Next.js", "Motion"],
            },
        ],
    },

    contact: {
        label: "Contacto",
        titlePre: "¿Creamos algo",
        titleAccent: "juntos?",
        channels: [
            {
                label: "Correo",
                value: "piconsergio010@gmail.com",
                href: "mailto:piconsergio010@gmail.com",
            },
            {
                label: "WhatsApp",
                value: "+57 320 343 9111",
                href: "https://api.whatsapp.com/send?phone=573203439111&text=Hola",
            },
            {
                label: "GitHub",
                value: "github.com/sergio-010",
                href: "https://github.com/sergio-010",
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/sergio-picon",
                href: "https://www.linkedin.com/in/sergio-picon/",
            },
        ],
        form: {
            name: "Nombre",
            namePlaceholder: "Tu nombre",
            email: "Correo",
            emailPlaceholder: "tu@correo.com",
            message: "Mensaje",
            messagePlaceholder: "Contame sobre tu proyecto…",
            submit: "Enviar mensaje",
        },
    },

    social: [
        { label: "GitHub", href: "https://github.com/sergio-010" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-picon/" },
    ],
};
