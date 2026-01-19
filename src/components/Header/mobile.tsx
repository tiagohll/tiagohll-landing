"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 },
    };

    const navLinks = [
        { name: "Início", href: "/" },
        { name: "Projetos", href: "#projetos" },
        { name: "Sobre", href: "#sobre" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-[#030014]/80 backdrop-blur-md border-b border-white/5">
            <div className="mx-auto flex h-20 max-w-[78.5rem] items-center justify-between px-5">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-white tracking-tight"
                    data-track="logo-header"
                    id="logo-header"
                >
                    tiago
                    <span className="text-[#7C5CFF]">
                        hll
                    </span>
                </Link>

                {/* Botão Hambúrguer */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-[110] p-2 text-white transition-colors hover:text-[#7C5CFF]"
                    aria-label="Abrir menu"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

                {/* Overlay do Menu Mobile */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 z-[100] flex flex-col bg-[#030014] px-5 pt-28 h-screen w-screen"
                        >
                            {/* Links de Navegação */}
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <motion.div
                                        key={link.name}
                                        variants={
                                            itemVariants
                                        }
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() =>
                                                setIsOpen(
                                                    false
                                                )
                                            }
                                            className="text-3xl font-medium text-white hover:text-[#7C5CFF] transition-colors"
                                            data-track={`menu-${link.name.toLowerCase()}-header`}
                                            id={`menu-${link.name.toLowerCase()}-header`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <hr className="my-10 border-white/10" />

                            {/* Botão de CTA no Menu */}
                            <motion.div
                                variants={itemVariants}
                            >
                                <Link
                                    href="#cta"
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] py-4 text-lg font-semibold text-white shadow-lg shadow-[#7C5CFF]/20"
                                >
                                    Solicitar orçamento
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>

                            {/* Detalhe Decorativo de Fundo (Glow) */}
                            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#7C5CFF]/10 blur-[100px] rounded-full -z-10" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
