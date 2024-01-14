import React, { useState } from "react"
import { FaAlignJustify } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { LuNetwork } from "react-icons/lu"
import { FaBuffer } from "react-icons/fa"
import { BsFillPersonVcardFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

export function Sidenav() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <FaAlignJustify onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />

            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
                    <a onClick={handleNav} href="#inicio" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer-110  hover:scale-110 ease-in duration-200">
                        <HiHome size={20} />
                        <span className="pl-4">Inicio</span>
                    </a>
                    <a onClick={handleNav} href="#trabajo" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer-110  hover:scale-110 ease-in duration-200">
                        <LuNetwork size={20} />
                        <span className="pl-4">Trabajo</span>
                    </a>
                    <a onClick={handleNav} href="#proyecto" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer-110  hover:scale-110 ease-in duration-200">
                        <FaBuffer size={20} />
                        <span className="pl-4">Proyecto</span>
                    </a>
                    <a onClick={handleNav} href="#resumen" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer-110  hover:scale-110 ease-in duration-200">
                        <BsFillPersonVcardFill size={20} />
                        <span className="pl-4">Resumen</span>
                    </a>
                    <a onClick={handleNav} href="#contacto" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer-110  hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contacto</span>
                    </a>

                </div>
            ) : (
                " "
            )}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#inicio" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiHome size={20} />
                    </a>
                    <a href="#trabajo" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <LuNetwork size={20} />
                    </a>
                    <a href="#proyecto" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaBuffer size={20} />
                    </a>
                    <a href="#resumen" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonVcardFill size={20} />
                    </a>
                    <a href="#contacto" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )

} 