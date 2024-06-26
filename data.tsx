import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, Instagram, LinkedinIcon, Github, Phone, PhoneCall, MessageCircle, MessageCircleCode } from "lucide-react";
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
        id: 1,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <LinkedinIcon size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/sergio-010",
    },

];


export const itemsNavbar: NavbarItem[] = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },

    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <MessageCircleCode size={25} color="#fff" strokeWidth={1} />,
        link: "/contac-me",
    },
];

export const dataAboutPage: AboutPageData[] = [
    {
        id: 2,
        title: "Docente de Informatica",
        subtitle: "Colegio Rafael Pombo",
        description: "Actualmente soy docente de Tecnología e Informática en el Colegio Superior Rafael Pombo.",
        date: "Abr 2024",
    },
    {
        id: 3,
        title: "Graduacion Ingeniero de Sistemas",
        subtitle: "UNISANGIL",
        description: "Graduado en Ingeniería de Sistemas por la Universidad Unisangil.",
        date: "Abr 2024 ",
    },
    {
        id: 4,
        title: "Desarrollador Frontend",
        subtitle: "Ant Pack",
        description: "Trabajé como desarrollador frontend en Ant Pack, donde utilicé React y Next.js para crear aplicaciones web eficientes y escalables.",
        date: "Oct 2023",
    },
]

export const dataCounter: CounterData[] = [
    {
        id: 0,
        endCounter: 6,
        text: "Meses de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 8,
        text: "Proyectos finalizados",
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
        title: "Portfolio",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Portfolio",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Portfolio",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Portfolio",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Portfolio",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Portfolio",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Portfolio",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Portfolio",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

