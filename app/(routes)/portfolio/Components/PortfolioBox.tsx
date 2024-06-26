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
        <div className="p-4 border  hover:shadow-lg   hover:shadow-blue-600/50 rounded-3xl">
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <Image src={image} alt={title} width={200} height={200}
                className="w-full md:w-[200px] rounded-2xl md:h-[150px]  " />
            <div className="flex gap-5 mt-5">
                <a className="p-2 transition duration-150 rounded-lg border hover:shadow-lg border-white hover:shadow-white/50 "
                    href={urlGithub} target="_blank"  >
                    Github
                </a>
                <a className="p-2 transition duration-150 rounded-lg border hover:shadow-lg border-blue-600 hover:shadow-blue-600/50 "
                    href={urlDemo} target="_blank"  >
                    Demo
                </a>
            </div>

        </div>
    );
}

export default PortfolioBox;