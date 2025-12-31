import Link from "next/link";

export default function Header() {
    return (
        <header className="relative z-40 w-full bg-gray-950 lg:sticky lg:top-0">
            <nav
                aria-label="Menu de navegação mobile"
                data-orientation="horizontal"
                dir="ltr"
                className="overflow-x-clip"
            >
                <div style={{ position: "relative" }}>
                    <ul
                        data-orientation="horizontal"
                        className="flex items-center justify-between  border-outline/20 px-5 py-4 xl:hidden"
                        dir="ltr"
                    >
                        <li>
                            <a
                                href="/"
                                className="flex items-center gap-4"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <div
                                data-orientation="vertical"
                                aria-orientation="vertical"
                                role="separator"
                                className="h-[31px] w-px bg-gray-800"
                            ></div>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav
                aria-label="Menu de navegação desktop"
                data-orientation="horizontal"
                dir="ltr"
                className="hidden border-b border-outline/20 xl:block"
            >
                <div style={{ position: "relative" }}>
                    <ul
                        data-orientation="horizontal"
                        className="mx-auto hidden max-w-[120rem] items-center justify-between p-4 text-sm xl:flex xl:px-10"
                        dir="ltr"
                    >
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-4"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/">
                                    <div className="no-underline data-[active]:underline  rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white flex items-center gap-2">
                                        Início
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/#projetos">
                                    <div className="no-underline data-[active]:underline  rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white flex items-center gap-2">
                                        Projetos
                                    </div>
                                </Link>
                            </ul>
                            <ul className="flex items-center text-gray-200 transition-colors">
                                <Link href="/#sobre">
                                    <div className="no-underline data-[active]:underline  rounded-[10px] p-3 text-xs transition-all hover:bg-gray-800 hover:text-white flex items-center gap-2">
                                        Sobre
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
