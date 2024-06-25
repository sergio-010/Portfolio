import Image from "next/image";

const Introduction = () => {
    return (
        <div className="w-full z-20 ">
            <div className="max-w-6xl gap-6 mx-auto h-full z-20 grid items-center align-center justify-center p-6 py-20 md:py-0 md:grid-cols-2 ">
                <Image src="/devv.jpg" alt="image" width={500} height={200} className="align-center" />
                <div className="flex flex-col justify-center mx-auto max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center
                     md:text-left md:text-5xl md:mb-10 ">
                        I Am <span className="text-blue-600">Sergio Picon</span>
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-left">Hello, I am a frontend developer passionate about creating
                        modern and dynamic web applications. Specialized in frontend technologies and frameworks like React and Next.js.
                        I am enthusiastic about solving problems and optimizing the user experience.

                    </p>
                    <div className="flex items-center justify-center gap-1 md:justify-start md:gap-5">
                        <a href="/projects" className="px-3 py-2 transition-all duration-300 cursor-pointer
                         text-md rounded-xl hover:shadow-lg border border-blue-600 hover:shadow-blue-600/50">Download cv</a>
                        <a href="/projects" className="px-3 py-2 transition-all duration-300 cursor-pointer
                         text-md rounded-xl hover:shadow-lg border border-blue-600 hover:shadow-blue-600/50">Contact me</a>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Introduction;