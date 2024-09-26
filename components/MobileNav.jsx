"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
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

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-5xl font-semibold">
                            dom<span className="text-accent">.</span>dev
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index)=> {
                        return <SheetClose asChild>
                            <Link 
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-2xl hover:text-accent transition-all`}
                            >
                                <div className="flex flex-row gap-2 justify-center items-center">{link.icon} {link.name}</div>
                            </Link>
                        </SheetClose>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav