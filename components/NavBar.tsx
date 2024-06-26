'use client'
import { usePathname } from 'next/navigation';
import { itemsNavbar } from '../data';
import TrasitionComponent from './TrasitionComponent';



const NavBar = () => {
    const router = usePathname();
    return (
        <TrasitionComponent position="right" className="w-full mt-auto h-max fixed z-40 flex flex-col
         items-center justify-center bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full cursor-pointer bg-black/50 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div key={item.id} className={`px-3 py-2 transition duration-150
                             rounded-full hover:bg-white/10 ${router === item.link ? 'bg-blue-600' : ''}`}>
                            <a href={item.link}>{item.icon}</a>
                        </div>
                    ))}
                </div>
            </nav>
        </TrasitionComponent>
    );
}

export default NavBar;
