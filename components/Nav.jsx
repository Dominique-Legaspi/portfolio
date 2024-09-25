"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, CircleUserRound, Briefcase, Lightbulb, SquareChartGantt } from 'lucide-react'

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
        name: 'experience',
        path: "/experience",
        icon: <Briefcase/>
    },
    {
        name: 'projects',
        path: "/projects",
        icon: <Lightbulb/>
    },
    {
        name: 'resume',
        path: "/resume",
        icon: <SquareChartGantt/>
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
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
  );
};

export default Nav