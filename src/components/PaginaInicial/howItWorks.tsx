"use client";

import { ChevronRight } from "lucide-react";
import Step from "../Step";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Conversa inicial",
            description:
                "Entendo sua ideia, necessidade e objetivo.",
        },
        {
            number: "02",
            title: "Planejamento",
            description:
                "Defino a melhor solução e o prazo de entrega.",
        },
        {
            number: "03",
            title: "Desenvolvimento",
            description:
                "Criação do site ou sistema com foco em qualidade e performance.",
        },
        {
            number: "04",
            title: "Entrega e suporte",
            description:
                "Publicação, testes e suporte inicial após a entrega.",
        },
    ];

    return (
        <section
            id="como-funciona"
            className="relative py-20 bg-[#0D0B14]"
        >
            <div className="mx-auto max-w-4xl px-6">
                {/* Cabeçalho */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white">
                        Como funciona
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Um processo simples, direto e sem
                        complicação.
                    </p>
                </div>

                {/* Lista de Passos */}
                <div className="flex flex-col">
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            {...step}
                            isLast={
                                index === steps.length - 1
                            }
                        />
                    ))}
                </div>

                {/* Chamada para Ação (CTA) */}
                <div className="mt-8 ml-10 md:ml-20">
                    <button className="group flex items-center gap-2 text-white font-medium transition-colors">
                        Quer começar?{" "}
                        <span className="text-outline group-hover:text-primary font-bold">
                            Vamos conversar
                        </span>
                        <ChevronRight
                            size={18}
                            className="group-hover:translate-x-1 text-outline group-hover:text-primary transition-transform"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
