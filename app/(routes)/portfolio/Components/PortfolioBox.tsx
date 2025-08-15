import Image from "next/image";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
    const { id, title, image, urlGithub, urlDemo } = data;
    return (
        <div className="group">
            <div className="aspect-[4/3] relative overflow-hidden bg-minimal-light mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="space-y-3">
                <h3 className="text-minimal-base font-light text-minimal-text">
                    {title}
                </h3>

                <div className="flex gap-4 text-minimal-sm">
                    <a
                        className="text-minimal-gray hover:text-minimal-text 
                                 border-b border-transparent hover:border-minimal-gray 
                                 transition-all duration-200"
                        href={urlGithub}
                        target="_blank"
                    >
                        Github
                    </a>
                    <a
                        className="text-minimal-gray hover:text-minimal-text 
                                 border-b border-transparent hover:border-minimal-gray 
                                 transition-all duration-200"
                        href={urlDemo}
                        target="_blank"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioBox;