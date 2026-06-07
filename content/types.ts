export interface NavLink {
    title: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface Stat {
    value: number;
    suffix?: string;
    label: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    stack: string[];
}

export interface EducationItem {
    title: string;
    institution: string;
    period: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    stack: string[];
}

export interface ContactChannel {
    label: string;
    value: string;
    href: string;
}

interface SectionCopy {
    label: string;
    titlePre: string;
    titleAccent: string;
}

export interface Dictionary {
    locale: "es" | "en";
    /** BCP 47 tag for Intl formatting (clock, dates) */
    intlLocale: string;
    /** Link to the same page in the other language */
    switchTo: { label: string; href: string; ariaLabel: string };
    site: {
        name: string;
        fullName: string;
        role: string;
        location: string;
        email: string;
        cvUrl: string;
        languages: string;
        intro: string;
        metaTitle: string;
        metaDescription: string;
    };
    nav: {
        links: NavLink[];
        openMenu: string;
        closeMenu: string;
    };
    ui: {
        toLightMode: string;
        toDarkMode: string;
    };
    hero: {
        viewProjects: string;
        downloadCv: string;
        scroll: string;
        available: string;
        locationLabel: string;
        localTime: string;
        mainStack: string;
    };
    about: SectionCopy & {
        paragraphs: string[];
        skills: string[];
        stats: Stat[];
    };
    experience: SectionCopy & { items: ExperienceItem[] };
    education: SectionCopy & { items: EducationItem[] };
    portfolio: SectionCopy & {
        projects: Project[];
        demoLabel: string;
        githubLabel: string;
    };
    contact: SectionCopy & {
        channels: ContactChannel[];
        form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            submit: string;
        };
    };
    social: SocialLink[];
}
