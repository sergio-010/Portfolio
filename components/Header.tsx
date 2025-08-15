import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-yellow-600/10 hidden lg:block">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <a href="#home" className="text-2xl text-white hover:text-yellow-600 transition-colors duration-300 font-light">
                        <span className="tracking-wide">SP</span>
                    </a>

                    {/* Social links */}
                    <div className="flex items-center gap-6">
                        {socialNetworks.map((item) => (
                            <a
                                key={item.id}
                                href={item.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-yellow-600 hover:scale-110 transition-all duration-300"
                            >
                                <div className="w-5 h-5">
                                    {item.logo}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;