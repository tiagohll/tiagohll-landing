"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Link2 } from "lucide-react";

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        description: string;
        image: string;
        fullDescription: string;
        techStack: string[];
        liveUrl?: string; // URL é opcional
    };
    onClose: () => void;
}

export default function ProjectDetail({
    project,
    onClose,
}: ProjectDetailProps) {
    return (
        <motion.div
            layoutId={project.id} // Continua a animação do card
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="col-span-full bg-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start" // Ocupa a grid inteira
        >
            <div className="w-full md:w-1/2 flex-shrink-0">
                <Link
                    href={String(project.liveUrl)}
                    target="_blank"
                >
                    <Image
                        src={project.image}
                        alt={
                            "Imagem de destaque do projeto: " +
                            project.title
                        }
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg object-cover shadow-lg"
                    />
                </Link>
                {project.techStack &&
                    project.techStack.length > 0 && (
                        <div className="mb-6">
                            <h4 className="font-semibold mt-2 mb-2 text-gray-300">
                                Tecnologias utilizadas:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="bg-white/10 select-none text-white text-xs px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    )}
            </div>

            <div className="w-full md:w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-3">
                    {project.title}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                    {project.description}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.fullDescription}
                </p>

                {project.liveUrl && (
                    <Link
                        href={"/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex leading-[16.41px] items-center gap-2 rounded-xl bg-gradient-to-r bg-gradient-default px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#7C5CFF]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/60 max-w-fit"
                    >
                        <Award size={18} />
                        Quero um site que converte
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
