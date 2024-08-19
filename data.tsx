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
        logo: <LinkedinIcon size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/sergio-picon/",
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
        link: "/contact-me",
    },
];

export const dataAboutPage: AboutPageData[] = [
    {
        id: 2,
        title: "Computer Science Teacher",
        subtitle: "Colegio Rafael Pombo",
        description: "I am currently a teacher of Technology and Computer Science at the Colegio Rafael Pombo .",
        date: "Abr 2024",
    },
    {
        id: 3,
        title: "Systems Engineer Graduation",
        subtitle: "UNISANGIL",
        description: "Graduated in Systems Engineering from Unisangil University.",
        date: "Abr 2024 ",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "Ant Pack",
        description: "I worked as a frontend developer at Ant Pack, where I used React and Next.js to build efficient and scalable web applications.",
        date: "Oct 2023",
    },
]

export const dataCounter: CounterData[] = [
    {
        id: 0,
        endCounter: 6,
        text: "Months of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Satisfied customers",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 8,
        text: "Completed projects",
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
        title: "Telephone",
        subtitle: "+57 320 34 39 111",
        link: "https://api.whatsapp.com/send?phone=573203439111&text=Holaaaa",
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
        title: "Email",
        subtitle: "piconsergio010@gmail",
        link: "piconsergio010@gmail.com",
        icon: <MailCheck />,
    },
];