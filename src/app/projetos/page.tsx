"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Layout,
    MonitorSmartphone,
    Palette,
} from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Barbearia Premium",
        description:
            "Sistema de agendamento e vitrine de serviços com design dark moderno.",
        url: "https://barbearia.tiagohlls-projects.vercel.app/",
        tag: "Agendamento",
        icon: <Palette size={20} />,
    },
    {
        title: "Estética Avançada",
        description:
            "Landing page sofisticada focada em conversão para procedimentos estéticos.",
        url: "https://estetica.tiagohlls-projects.vercel.app/",
        tag: "Health & Beauty",
        icon: <Layout size={20} />,
    },
    {
        title: "Academia Iron",
        description:
            "Portal para alunos com foco em planos, modalidades e CTAs diretos.",
        url: "https://academia.tiagohlls-projects.vercel.app/",
        tag: "Fitness",
        icon: <MonitorSmartphone size={20} />,
    },
];

export default function Projects() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Header />
            <section
                id="projetos"
                className="relative py-20 max-lg:pt-10"
            >
                {/* Background Glow similar ao do CTA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] bg-[#7C5CFF]/5 rounded-full blur-[150px] -z-10" />

                <div className="mx-auto w-full max-w-[78.5rem] relative z-10">
                    {/* Header da Seção - Seguindo o estilo do Services */}
                    <div className="flex flex-col md:items-start items-center text-center md:text-start mb-16">
                        <div className="border border-white/10 bg-white/5 py-1 px-3 rounded-2xl w-fit text-sm flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-outline rounded-full shadow-[0_0_15px_#a38bff]" />
                            Portfólio
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Projetos que{" "}
                            <span className="b-gradient-clean bg-clip-text text-transparent">
                                conectam marcas
                            </span>
                        </h2>
                        <p className="mt-4 text-tsecondary max-w-2xl text-lg">
                            Abaixo estão alguns exemplos de
                            interfaces reais que desenvolvi,
                            utilizando tecnologia de ponta
                            para entregar velocidade e
                            conversão.
                        </p>
                    </div>

                    {/* Grid de Projetos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                variants={fadeIn}
                                className="group flex flex-col mb-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all hover:border-[#7C5CFF]/50"
                            >
                                {/* Container do Iframe (Janela do Navegador) */}
                                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
                                    {/* Barra do Navegador */}
                                    <div className="absolute top-0 z-20 flex w-full items-center gap-1.5 bg-white/5 px-4 py-2 backdrop-blur-md">
                                        <div className="flex gap-1">
                                            <div className="h-2 w-2 rounded-full bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-white/20" />
                                        </div>
                                    </div>

                                    {/* Iframe com Scale para visualização tipo 'Thumbnail' */}
                                    <div className="h-full w-full pt-8">
                                        <iframe
                                            src={
                                                project.url
                                            }
                                            title={
                                                project.title
                                            }
                                            className="h-[200%] w-[200%] origin-top-left scale-50 border-none pointer-events-none transition-transform duration-700 group-hover:scale-[0.52]"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Overlay de Hover */}
                                    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0A0A0A]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Link
                                            href={
                                                project.url
                                            }
                                            target="_blank"
                                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6A4DFF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                                        >
                                            Ver site ao vivo{" "}
                                            <ExternalLink
                                                size={16}
                                            />
                                        </Link>
                                    </div>
                                </div>

                                {/* Conteúdo do Card */}
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center gap-2 text-[#A78BFF] mb-3">
                                        {project.icon}
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                                            {project.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#A78BFF]">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-tsecondary leading-relaxed flex-grow">
                                        {
                                            project.description
                                        }
                                    </p>

                                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-[10px] text-white/30 font-mono uppercase tracking-tighter">
                                            Deployment:
                                            Vercel
                                        </span>
                                        <Link
                                            href={
                                                project.url
                                            }
                                            target="_blank"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            <ExternalLink
                                                size={18}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
