"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CardShowcase from "../FeatureCard/showCase";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative py-20 max-lg:pt-10">
            <div className="relative z-30 mx-auto w-full max-w-[78.5rem] px-5 flex lg:flex-row flex-col items-center">
                <div className="flex flex-col md:text-start text-center items-center md:items-baseline">
                    <h1 className="mt-4 max-w-[63.8125rem] text-2xl font-medium text-tprimary lg:mt-6 lg:text-5xl">
                        Criação de sites e sistemas simples
                        <span className="b-gradient-clean bg-clip-text text-transparent">
                            <br />
                            para pequenos negocios
                        </span>
                    </h1>
                    <p className="mt-4 max-w-[60rem] text-sm text-tsecondary lg:mt-8 lg:text-xl">
                        Mais presença online, mais
                        organização e mais resultados. Sites
                        rápidos, responsivos e pensandos
                        para conversão.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="#contato"
                            className="inline-flex mt-6 leading-[16.41px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#7C5CFF]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/60 max-w-fit"
                        >
                            Solicitar orçamento
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
                <div>
                    <CardShowcase />
                </div>
            </div>
        </section>
    );
}
