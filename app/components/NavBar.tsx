import { Link } from 'lucide-react';
import { itemsNavbar } from '../../data';

const NavBar = () => {
    return (
        <div className="w-full mt-auto h-max fixed z-40 flex flex-col items-center justify-center bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full cursor-pointer bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div key={item.id} className="px-3 py-2 transition duration-150 rounded-full hover:bg-white/10">
                            <a href={item.link}>{item.icon}</a>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
