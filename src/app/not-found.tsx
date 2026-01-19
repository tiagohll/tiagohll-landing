"use client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
            {/* Efeito de luz de fundo (Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C5CFF]/10 blur-[120px] rounded-full z-0" />

            <div className="relative z-10 px-5 text-center">
                {/* Número 404 Animado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[10rem] md:text-[15rem] font-bold leading-none select-none">
                        <span className="bg-gradient-to-b from-white to-[#7C5CFF]/20 bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>
                </motion.div>

                {/* Mensagem de Erro */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                    className="-mt-8 md:-mt-12"
                >
                    <h2 className="text-2xl md:text-4xl font-medium text-white mb-4">
                        Página não encontrada
                    </h2>
                    <p className="text-tsecondary text-sm md:text-lg max-w-md mx-auto mb-8">
                        Parece que o sistema se perdeu no
                        caminho. Que tal voltar para um
                        lugar seguro e continuar crescendo
                        seu negócio?
                    </p>
                </motion.div>

                {/* Botões de Ação */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/30 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-[#7C5CFF]/50"
                    >
                        <Home size={18} />
                        Voltar ao Início
                    </Link>

                    <button
                        onClick={() =>
                            window.history.back()
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-[#7C5CFF]/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#7C5CFF]/10 hover:border-[#7C5CFF]/60"
                    >
                        <ArrowLeft size={18} />
                        Voltar página
                    </button>
                </motion.div>
            </div>

            {/* Elementos flutuantes decorativos */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[15%] w-12 h-12 bg-gradient-to-br from-[#7C5CFF] to-blue-400 rounded-lg blur-[2px] opacity-20 hidden md:block"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[20%] left-[15%] w-16 h-16 bg-gradient-to-br from-[#6A4DFF] to-purple-600 rounded-full blur-[2px] opacity-20 hidden md:block"
            />
        </section>
    );
}
