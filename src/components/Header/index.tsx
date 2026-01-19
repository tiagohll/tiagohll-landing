"use client";
import Link from "next/link";
import HeaderMobile from "./mobile"; // Certifique-se de que o arquivo mobile.tsx está na mesma pasta

export default function Header() {
    return (
        <header className="relative z-50 w-full bg-gray-950 lg:sticky lg:top-0">
            <nav
                aria-label="Menu de navegação mobile"
                className="overflow-x-clip"
            >
                <div style={{ position: "relative" }}>
                    <ul className="flex items-center justify-between border-b border-white/5 px-5 py-4 xl:hidden">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-4 font-bold text-white"
                            >
                                tiagohll
                            </Link>
                        </li>
                        <li className="flex items-center">
                            {/* O componente HeaderMobile entra aqui para controlar o menu hambúrguer */}
                            <HeaderMobile />
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menu Desktop */}
            <nav
                aria-label="Menu de navegação desktop"
                className="hidden border-b border-white/5 xl:block"
            >
                <div style={{ position: "relative" }}>
                    <ul className="mx-auto hidden max-w-[120rem] items-center justify-between p-4 text-sm xl:flex xl:px-10">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-4 font-bold text-white"
                            >
                                tiagohll
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/">
                                    <div className="rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white">
                                        Início
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/#projetos">
                                    <div className="rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white">
                                        Projetos
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/#servicos">
                                    <div className="rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white">
                                        Sobre
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/#cta">
                                    <div className="rounded-[10px] p-3 text-xs font-semibold transition-all bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] hover:opacity-90 text-white flex items-center gap-2 duration-200">
                                        Solicitar Orçamento
                                    </div>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
