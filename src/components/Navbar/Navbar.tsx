import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-white p-6 shadow z-50">
            <div className="flex items-center flex-shrink-0 text-black">
                <span className="font-semibold tracking-tight">CHATCOMBOT</span>
            </div>
            <div className="hidden lg:flex lg:w-3/5 justify-center">
                <div className="text-[1.2rem] lg:flex-grow flex justify-end font-bold">
                    <a href="#inicio" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4 cursor-pointer">
                        INICIO
                    </a>
                    <a href="#sobre" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                        SOBRE
                    </a>
                    <a href="#exemplos" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                        EXEMPLOS
                    </a>
                    <a href="#planos" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                        PLANOS
                    </a>
                    <a href="#faq" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                        FAQ
                    </a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                        CONTATO
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex w-1/5 justify-end">
                <a href="https://app.chatcombot.com.br" target="_blank" className="inline-block text-sm px-6 py-4 leading-none border rounded text-white bg-violet-600 hover:bg-violet-900 mt-4 lg:mt-0 font-bold">
                    INGRESSAR
                </a>
            </div>
            <div className="block lg:hidden mr-[2rem]">
                <button
                    onClick={handleMenuClick}
                    className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-700 hover:border-gray-700"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="w-full block flex-grow lg:hidden">
                    <div className="text-[17px] lg:flex-grow flex flex-col items-center font-bold">
                        <a href="#inicio" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4 cursor-pointer">
                            INICIO
                        </a>
                        <a href="#sobre" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                            SOBRE
                        </a>
                        <a href="#exemplos" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                            EXEMPLOS
                        </a>
                        <a href="#planos" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                            PLANOS
                        </a>
                        <a href="#faq" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                            FAQ
                        </a>
                        <a href="#contact" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-700 mr-4">
                            CONTATO
                        </a>
                        <a href="https://app.chatcombot.com.br" target="_blank" onClick={handleLinkClick} className="block mt-4 lg:inline-block lg:mt-0 text-sm px-6 py-4 leading-none border rounded text-white bg-violet-600 hover:bg-violet-900 font-bold">
                            INGRESSAR
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
