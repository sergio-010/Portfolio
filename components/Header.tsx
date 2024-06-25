import { socialNetworks } from "@/data";
import TrasitionComponent from "./TrasitionComponent";

const Header = () => {
    return (
        <TrasitionComponent position="right" className="w-full absolute z-40 inline-block top-5 md:top-10 px-20" >
            <header>
                <div className="max-w-6xl mx-auto container justify-between md:flex">
                    <a href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">Sergio
                            <span className="text-blue-600">Dev</span>
                        </h1>
                    </a>
                    <div className="flex items-center justify-center gap-7 ">
                        {socialNetworks.map((item) => (
                            <a key={item.id} href={item.src} target="_blank"
                                className="transition-all duration-300 hover:text-blue-600">
                                {item.logo}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </TrasitionComponent>
    );
}

export default Header;