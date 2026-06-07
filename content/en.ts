import type { Dictionary } from "./types";

export const en: Dictionary = {
    locale: "en",
    intlLocale: "en-US",
    switchTo: { label: "ES", href: "/", ariaLabel: "Cambiar a español" },

    site: {
        name: "Sergio Picón",
        fullName: "Sergio Andrés Picón",
        role: "Systems Engineer · Full Stack Developer",
        location: "Colombia — Open to remote",
        email: "piconsergio010@gmail.com",
        cvUrl: "/CV-Picon Sergio Andres.pdf",
        languages: "Spanish — Native · English — B1",
        intro:
            "Full Stack developer with 2+ years building high-performance web applications end to end: React and Next.js on the frontend, NestJS and Node.js on the backend, and deployments on AWS.",
        metaTitle: "Sergio Picón — Full Stack Developer",
        metaDescription:
            "Systems Engineer and Full Stack Developer. React and Next.js on the frontend, NestJS and Node.js on the backend, AWS deployments. Remote from Colombia.",
    },

    nav: {
        links: [
            { title: "Home", href: "#home" },
            { title: "About", href: "#about" },
            { title: "Experience", href: "#experience" },
            { title: "Education", href: "#education" },
            { title: "Projects", href: "#portfolio" },
            { title: "Contact", href: "#contact" },
        ],
        openMenu: "Open menu",
        closeMenu: "Close menu",
    },

    ui: {
        toLightMode: "Switch to light mode",
        toDarkMode: "Switch to dark mode",
    },

    hero: {
        viewProjects: "View projects",
        downloadCv: "Download CV",
        scroll: "Scroll",
        available: "Available for projects",
        locationLabel: "Location",
        localTime: "local time",
        mainStack: "Core stack",
    },

    about: {
        label: "About",
        titlePre: "From the interface",
        titleAccent: "to the infrastructure",
        paragraphs: [
            "I'm Sergio Andrés Picón, a Systems Engineer graduated from Fundación Universitaria UNISANGIL. I build web applications end to end: from the interface to the infrastructure.",
            "On the frontend I work with React, Next.js and TypeScript; on the backend with NestJS, Node.js and Prisma over PostgreSQL; and I deploy on AWS — EC2, S3, IAM and Secrets Manager. I've designed REST APIs with JWT authentication and zero-downtime production migrations.",
            "I work in international, remote agile teams, taking part in architecture decisions, code reviews and the definition of technical standards. Available for full-time or contract projects.",
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
            { value: 2, suffix: "+", label: "Years of experience" },
            { value: 10, suffix: "+", label: "Projects completed" },
            { value: 15, label: "Technologies mastered" },
            { value: 3, label: "Companies worked with" },
        ],
    },

    experience: {
        label: "Experience",
        titlePre: "Where I have",
        titleAccent: "built",
        items: [
            {
                role: "Full Stack Developer",
                company: "Evalua",
                period: "May 2025 — Present",
                description:
                    "Full stack development of modules for an educational platform used by universities nationwide. REST APIs with JWT authentication and secure multi-role sessions, schema modeling with Prisma and zero-downtime production migrations, data-visualization dashboards, and AWS infrastructure: EC2, S3, IAM and Secrets Manager. Active participation in architecture decisions and code reviews.",
                stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "AWS"],
            },
            {
                role: "Frontend Developer",
                company: "Vaseprint",
                period: "Mar 2024 — May 2025",
                description:
                    "Design and development of reusable, scalable UI components with React, Next.js, Tailwind CSS and shadcn/ui. Responsive, accessible interfaces following WCAG standards. REST API integration with Node.js, NestJS and Prisma, plus development and deployment environments with Docker.",
                stack: ["Next.js", "Tailwind CSS", "NestJS", "Prisma", "Docker"],
            },
            {
                role: "Junior Frontend Developer",
                company: "Ant Pack",
                period: "Sep 2023 — Feb 2024",
                description:
                    "End-to-end development of projects with React and Next.js, from design to final implementation. Reusable components focused on UX/UI and performance (Core Web Vitals), plus research and adoption of new technologies to streamline the development cycle.",
                stack: ["React", "Next.js", "Core Web Vitals"],
            },
        ],
    },

    education: {
        label: "Education",
        titlePre: "Academic",
        titleAccent: "background",
        items: [
            {
                title: "Systems Engineering",
                institution: "Fundación Universitaria UNISANGIL",
                period: "2018 — 2024",
                description:
                    "Graduated with a focus on modern web development and high-performance technology solutions, from interface to infrastructure.",
            },
            {
                title: "Diploma in Software Development, Networks & Cybersecurity",
                institution: "Fundación Universitaria UNISANGIL",
                period: "2023",
                description:
                    "Specialized training in information security and systems architecture, broadening an end-to-end view of the development cycle.",
            },
        ],
    },

    portfolio: {
        label: "Projects",
        titlePre: "Selected",
        titleAccent: "work",
        demoLabel: "Demo",
        githubLabel: "GitHub",
        projects: [
            {
                id: 1,
                title: "Todo List",
                description: "Task management with a simple, direct interface.",
                image: "/todo.png",
                urlGithub: "https://github.com/sergio-010/Todo-List",
                urlDemo: "https://todo-list-neon-ten.vercel.app/",
                stack: ["React", "TypeScript"],
            },
            {
                id: 2,
                title: "Ecommerce",
                description: "Online store with catalog, cart and its own backend.",
                image: "/ecommerce.png",
                urlGithub: "https://github.com/sergio-010/ecommerce-beer",
                urlDemo: "https://github.com/sergio-010/backend-ecommerce",
                stack: ["Next.js", "Node.js"],
            },
            {
                id: 3,
                title: "Rental Cars",
                description: "Car rental platform with bookings.",
                image: "/Rental.png",
                urlGithub: "https://github.com/sergio-010/Rental-",
                urlDemo: "https://cheo-cars.vercel.app/",
                stack: ["Next.js", "Tailwind CSS"],
            },
            {
                id: 4,
                title: "Portfolio",
                description: "This site: minimal, animated and handcrafted.",
                image: "/porfolio.png",
                urlGithub: "https://github.com/sergio-010/Portfolio",
                urlDemo: "https://sergio-picon.vercel.app/",
                stack: ["Next.js", "Motion"],
            },
        ],
    },

    contact: {
        label: "Contact",
        titlePre: "Shall we build",
        titleAccent: "something together?",
        channels: [
            {
                label: "Email",
                value: "piconsergio010@gmail.com",
                href: "mailto:piconsergio010@gmail.com",
            },
            {
                label: "WhatsApp",
                value: "+57 320 343 9111",
                href: "https://api.whatsapp.com/send?phone=573203439111&text=Hello",
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
            name: "Name",
            namePlaceholder: "Your name",
            email: "Email",
            emailPlaceholder: "you@email.com",
            message: "Message",
            messagePlaceholder: "Tell me about your project…",
            submit: "Send message",
        },
    },

    social: [
        { label: "GitHub", href: "https://github.com/sergio-010" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-picon/" },
    ],
};
