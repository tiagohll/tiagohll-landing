"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    // Tecnologias usadas no projeto
    const techs = ["Next.js", "Tailwind CSS", "CRM API"];

    return (
        <section
            id="projetos"
            className="relative py-20 bg-mesh border-t border-white/10"
        >
            <div className="mx-auto w-full max-w-[78.5rem] px-5">
                {/* Título da Seção fora do card */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-white">
                        Projetos que geram{" "}
                        <span className="b-gradient-clean">
                            resultado, <br />
                            não só layout bonito
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Alguns trabalhos focados em
                        conversão, performance e
                        simplicidade.
                    </p>
                </div>

                {/* Card Único de Projeto */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-md">
                    {/* Barra Superior estilo Navegador */}
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-[#FF6159]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C941]" />
                        <span className="text-sm font-medium text-gray-400 ml-4 select-none">
                            Projetos
                        </span>
                    </div>

                    {/* Conteúdo do Projeto */}
                    <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-10 items-center">
                        {/* Imagem do Projeto com Efeito Hover */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full lg:w-1/2 relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r bg-gradient-clean rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <Image
                                src="/projetos/hadar.png" // Certifique-se que o caminho está correto
                                alt="Agência Hadar"
                                width={800}
                                height={500}
                                className="relative rounded-xl border border-white/10 w-full object-cover"
                            />
                        </motion.div>

                        {/* Informações do Projeto */}
                        <div className="w-full lg:w-1/2 text-white">
                            <h3 className="text-3xl font-bold mb-4">
                                Agência Hadar
                            </h3>
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                Landing page voltada para
                                conversão + sistema interno
                                para organizar e automatizar
                                leads.
                            </p>
                            <p className="text-gray-400 mb-8">
                                Desenvolvimento de uma
                                landing page otimizada para
                                captação e automatização de
                                leads.
                            </p>

                            {/* Tecnologias */}
                            <div className="mb-8">
                                <span className="text-sm text-gray-400 block mb-3 uppercase tracking-widest font-semibold select-none">
                                    Tecnologias modernas
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-white/10 border border-white/5 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors select-none"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Botão de Call to Action */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/34996805599"
                                target="_blank"
                                className="inline-flex leading-[16.41px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#7C5CFF]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/60 max-w-fit"
                            >
                                <Award size={18} />
                                Quero um site que converte
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
