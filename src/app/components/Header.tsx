'use client'

import Image from "next/image";
import {useState} from 'react'
import menuImg from '@/assets/icons/menu.svg'
import closeImg from '@/assets/icons/close.svg'
import Link from "next/link";
const Header = () => {


    const [menu, setMenu] = useState<boolean>(false)


    return (
        <>
            {/* Header Mobile */}
            <header className="bg-violet-800 block lg:hidden relative text-white w-full font-permanent-marker">
                <nav className="flex justify-between p-4 z-0">
                    <h1>BAU E.C</h1>
                    <Image
                    src={menuImg}
                    alt=""
                    className={`${!menu ? "block" : "hidden"}`}
                    onClick={e => setMenu(!menu)}
                    />
                </nav>
            </header>

            {/* Contenedor principal */}
            <ul className={`z-20 absolute top-0 w-full max-w-full lg:hidden bg-violet-800 h-screen cursor-pointer transition-all origin-right font-permanent-marker ${menu ? "scale-x-100" : "scale-x-0"}`} >
                <li className="w-full flex justify-end">
                    <Image
                    src={closeImg}
                    alt=""
                    className={`p-4 text-right w-14 ${menu ? "block" : "hidden"}`}
                    onClick={e => setMenu(!menu)}
                    />
                </li>
                <li  className="w-full hover:bg-violet-700 p-4"><Link href="#quien_soy">Quien soy</Link></li>
                <li className="w-full hover:bg-violet-700 p-4"><Link href="#quien_soy">Canciones</Link></li>
                <li className="w-full hover:bg-violet-700 p-4"><Link href="#quien_soy">Contacto</Link></li>
            </ul>
            

            {/* Header Desktop */}
            <header className="bg-violet-800 hidden lg:block text-white font-permanent-marker">
                <nav className="flex mx-auto justify-between items-center container">
                    
                    <Link href='/'>
                        <h1 className="lg:text-2xl">BAU E.C</h1>
                    </Link>
                    <ul className="flex w-auto whitespace-nowrap">
                        <li className="w-full hover:bg-violet-700 transition ease-cubic duration-200 py-4 px-8 cursor-pointer">Quien soy</li>
                        <li className="w-full hover:bg-violet-700 transition ease-cubic duration-200 py-4 px-8 cursor-pointer">Canciones</li>
                        <li className="w-full hover:bg-violet-700 transition ease-cubic duration-200 py-4 px-8 cursor-pointer">Contacto</li>
                    </ul>
                    
                </nav>
            </header>
        </>
    )
}


export default Header;