"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, CircleUserRound, Briefcase, Lightbulb, SquareChartGantt } from 'lucide-react'
import Social from "./Social";

const links = [
    {
        name: "home",
        path: "/",
        icon: <House/>
    },
    {
        name: 'about',
        path: "/about",
        icon: <CircleUserRound/>
    },
    {
        name: 'projects',
        path: "/projects",
        icon: <Lightbulb/>
    },
    // {
    //     name: 'resume',
    //     path: "/resume",
    //     icon: <SquareChartGantt/>
    // },
];

const Nav = () => {
    const pathname = usePathname();
    return (
            <div className="flex flex-row gap-16">
                <nav className="flex gap-8 justify-center items-center">
                    {links.map((link, index)=> {
                        return (
                            <Link 
                            href={link.path}
                            key={index} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                             font-medium text-xl hover:text-accent transition-all`}>
                                <div className="flex flex-row gap-1 justify-center items-center">{link.icon} {link.name}</div>
                            </Link>
                        );
                    })}
                </nav>
                <Social 
                    containerStyles="flex gap-6" 
                    iconStyles="flex justify-center items-center text-base
                    hover:text-accent hover:transition-all duration-500"
                />
            </div>
  );
};

export default Nav