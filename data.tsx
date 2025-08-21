import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, Instagram, LinkedinIcon, Github, Phone, PhoneCall, MessageCircle, MessageCircleCode, MailCheck } from "lucide-react";
import { ReactElement } from "react";

interface SocialNetwork {
    id: number;
    logo: ReactElement;
    src: string;
}

interface NavbarItem {
    id: number;
    title: string;
    icon: ReactElement;
    link: string;
}

interface AboutPageData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}

interface CounterData {
    id: number;
    endCounter: number;
    text: string;
    lineRight: boolean;
    lineRightMobile: boolean;
}

interface ServiceData {
    icon: ReactElement;
    title: string;
    description: string;
}

interface PortfolioData {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
}

export const socialNetworks: SocialNetwork[] = [
    {
        id: 2,
        logo: <LinkedinIcon size={20} strokeWidth={1.5} />,
        src: "https://www.linkedin.com/in/sergio-picon/",
    },
    {
        id: 4,
        logo: <Github size={20} strokeWidth={1.5} />,
        src: "https://github.com/sergio-010",
    },
];


export const itemsNavbar: NavbarItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={20} strokeWidth={1.5} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Sobre Mí",
        icon: <UserRound size={20} strokeWidth={1.5} />,
        link: "#about",
    },
    {
        id: 3,
        title: "Educación",
        icon: <Book size={20} strokeWidth={1.5} />,
        link: "#education",
    },
    {
        id: 4,
        title: "Experiencia",
        icon: <BookText size={20} strokeWidth={1.5} />,
        link: "#experience",
    },
    {
        id: 5,
        title: "Portafolio",
        icon: <CodeSquare size={20} strokeWidth={1.5} />,
        link: "#portfolio",
    },
    {
        id: 6,
        title: "Contacto",
        icon: <MessageCircleCode size={20} strokeWidth={1.5} />,
        link: "#contact",
    },
];

export const dataAboutPage: AboutPageData[] = [
    {
        id: 1,
        title: "Desarrollador Frontend",
        subtitle: "Evalua (Remoto)",
        description: "Desarrollo de funcionalidades interactivas y módulos complejos con React y Next.js. Implementación de herramientas de análisis, visualización de datos y dashboards. Colaboración en proyectos educativos y de gestión, priorizando el rendimiento y la experiencia de usuario. Integración con APIs, control de versiones con Git y trabajo en equipos multidisciplinarios ágiles.",
        date: "Mayo 2024 - Actualidad",
    },
    {
        id: 2,
        title: "Desarrollador Frontend",
        subtitle: "Vaseprint (Remoto)",
        description: "Diseñé y desarrollé componentes reutilizables y escalables de UI utilizando React, Next.js, Tailwind CSS y shadcn/ui. Implementé interfaces responsivas, minimalistas y accesibles. Integré APIs y servicios usando Node.js, NestJS y Prisma. Apliqué mejoras de rendimiento y configuré entornos con Docker.",
        date: "Marzo 2024 - Mayo 2025",
    },
    {
        id: 3,
        title: "Desarrollador Frontend",
        subtitle: "Ant Pack (Remoto)",
        description: "Participé como desarrollador frontend junior en diversos proyectos, desde la fase de diseño hasta su implementación final. Desarrollé componentes reutilizables y funcionalidades basadas en principios de UX/UI. Optimicé el rendimiento para mejorar la experiencia del usuario y colaboré estrechamente con diseñadores y desarrolladores.",
        date: "Octubre 2023 - Febrero 2024",
    },
    {
        id: 4,
        title: "Graduación Ingeniería de Sistemas",
        subtitle: "Fundación Universitaria UNISANGIL",
        description: "Graduado en Ingeniería de Sistemas con enfoque en desarrollo web moderno y tecnologías frontend. Especializado en la creación de soluciones tecnológicas de alto rendimiento.",
        date: "2018 - 2024",
    },
    {
        id: 5,
        title: "Diplomado",
        subtitle: "Desarrollo de software, redes y ciberseguridad",
        description: "Completé un diplomado especializado en desarrollo de software, redes y ciberseguridad, ampliando mis conocimientos en seguridad informática y arquitectura de sistemas.",
        date: "2023",
    },
]

export const dataCounter: CounterData[] = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Proyectos completados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 8,
        text: "Tecnologías dominadas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Empresas colaboradas",
        lineRight: false,
        lineRightMobile: false,
    },

];

export const serviceData: ServiceData[] = [
    {
        icon: <Computer />,
        title: "Desarrollo Frontend",
        description: "Especializado en React, Next.js y tecnologías modernas para crear interfaces de usuario eficientes y escalables",
    },
    {
        icon: <Pencil />,
        title: "Diseño UI/UX",
        description: "Diseño de interfaces responsivas, minimalistas y accesibles utilizando Tailwind CSS y principios de UX/UI",
    },
    {
        icon: <Rocket />,
        title: "Optimización de Rendimiento",
        description: "Mejora del rendimiento de aplicaciones web y optimización de la experiencia del usuario",
    },
    {
        icon: <Book />,
        title: "Integración de APIs",
        description: "Integración de servicios backend utilizando Node.js, NestJS y Prisma para aplicaciones completas",
    },
    {
        icon: <Crop />,
        title: "Componentes Reutilizables",
        description: "Desarrollo de componentes escalables y reutilizables siguiendo las mejores prácticas de desarrollo",
    },
];

export const dataPortfolio: PortfolioData[] = [
    {
        id: 1,
        title: "Todo-List",
        image: "/todo.png",
        urlGithub: "https://github.com/sergio-010/Todo-List",
        urlDemo: "https://todo-list-neon-ten.vercel.app/",
    },
    {
        id: 2,
        title: "Portfolio",
        image: "/porfolio.png",
        urlGithub: "https://github.com/sergio-010/Portfolio",
        urlDemo: "https://sergio-picon.vercel.app/",
    },
    {
        id: 3,
        title: "Ecommerce",
        image: "/ecommerce.png",
        urlGithub: "https://github.com/sergio-010/ecommerce-beer",
        urlDemo: "https://github.com/sergio-010/backend-ecommerce",
    },
    {
        id: 4,
        title: "Rental Cars",
        image: "/Rental.png",
        urlGithub: "https://github.com/sergio-010/Rental-",
        urlDemo: "https://cheo-cars.vercel.app/",
    },
    {
        id: 5,
        title: "Portfolio",
        image: "/devv.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Portfolio",
        image: "/devv.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Portfolio",
        image: "/devv.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Portfolio",
        image: "/devv.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];
export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 320 34 39 111",
        link: "https://api.whatsapp.com/send?phone=573203439111&text=Hola",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/sergio-010",
        link: "https://github.com/sergio-010",
        icon: <Github />,
    },
    {
        id: 3,
        title: "Correo",
        subtitle: "piconsergio010@gmail.com",
        link: "mailto:piconsergio010@gmail.com",
        icon: <MailCheck />,
    },
    {
        id: 4,
        title: "Ubicación",
        subtitle: "Colombia",
        link: "#",
        icon: <MessageCircle />,
    },
];