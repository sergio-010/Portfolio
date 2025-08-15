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
        title: "Creadora de contenido",
        subtitle: "Ant Pack (Remoto)",
        description: "Trabajé como desarrollador frontend junior, participando en varios proyectos desde el concepto inicial hasta su realización concreta. Desarrollé soluciones utilizando React y frameworks como Next.js, enfocándome en la creación de interfaces de usuario eficientes.",
        date: "2023 - 2024",
    },
    {
        id: 2,
        title: "Profesor de Informática",
        subtitle: "Colegio Rafael Pombo",
        description: "Actualmente soy profesor de Tecnología e Informática, desarrollando habilidades pedagógicas y compartiendo conocimientos en tecnología con estudiantes.",
        date: "2024 - Presente",
    },
    {
        id: 3,
        title: "Graduación Ingeniería de Sistemas",
        subtitle: "Fundación Universitaria UNISANGIL",
        description: "Graduado en Ingeniería de Sistemas de la Fundación Universitaria UNISANGIL con enfoque en desarrollo web moderno y tecnologías frontend.",
        date: "2018 - 2024",
    },
]

export const dataCounter: CounterData[] = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Proyectos completados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 2,
        text: "Tecnologías dominadas",
        lineRight: true,
        lineRightMobile: false,
    },

];

export const serviceData: ServiceData[] = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
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