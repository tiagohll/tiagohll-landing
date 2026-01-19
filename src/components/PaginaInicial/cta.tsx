"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CTA() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section
            id="cta"
            className="relative py-20 px-5 flex justify-center border-t border-white/10"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                variants={fadeIn}
                className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-24 overflow-hidden"
            >
                {/* Efeitos de Brilho (Glow) */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7C5CFF]/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7C5CFF]/20 rounded-full blur-[120px]" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                        variants={fadeIn}
                    >
                        Vamos transformar sua ideia em{" "}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                            um site que gera resultado
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 text-lg md:text-xl max-w-2xl"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        Desenvolvimento de{" "}
                        <span className="font-semibold text-gray-200">
                            landing pages
                        </span>{" "}
                        e sites modernos, rápidos e focados
                        em conversão.
                    </motion.p>

                    <motion.a
                        href="https://wa.me/5534996805599?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20site."
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] text-white hover:text-white/80 cursor-pointer"
                        id="hero-cta-button"
                        data-track="hero-cta-button"
                    >
                        Solicitar orçamento
                        <ChevronRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </motion.a>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 pt-4"
                        variants={fadeIn}
                    >
                        <span>Sem compromisso</span>
                        <span className="hidden md:inline">
                            •
                        </span>
                        <span>Resposta rápida</span>
                        <span className="hidden md:inline">
                            •
                        </span>
                        <span>Projeto sob medida</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
