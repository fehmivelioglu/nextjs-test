"use client";

import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
export default function Header(){
    const pathname = usePathname();
    const router = useRouter();
    return (
        <header className="w-full bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-4">
                    <Link href={"/"} className={`text-2xl font-bold text-gray-800 ${pathname === "/" ? "underline" : ""}`}>Home</Link>
                    <Link href={"/about"} className={`text-2xl font-bold text-gray-800 ${pathname === "/about" ? "underline" : ""}`}>About</Link>
                    <Link href={"/contact"} className={`text-2xl font-bold text-gray-800 ${pathname === "/contact" ? "underline" : ""}`}>Contact</Link>
                    <Link href={{pathname:"/about",query:{name:"John"}}} className={`text-2xl font-bold text-gray-800 ${pathname === "/about" ? "underline" : ""}`}>About</Link>
                </div>
                <button 
                    onClick={() => router.push("/about")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Login
                </button>
            </nav>
            
        </header>
    )
}
