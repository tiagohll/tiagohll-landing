"use client";
import { useState, useEffect } from "react";
import FeatureCard from "./index";
import { motion } from "framer-motion";

const ALL_CARDS = [
    {
        badge: "Performance",
        title: "Site Ultra Rápido",
        description: "Foco em carregamento abaixo de 2s.",
    },
    {
        badge: "SEO",
        title: "Google Me Achou",
        description:
            "Otimização completa para busca orgânica.",
    },
    {
        badge: "Design",
        title: "Interface UI/UX",
        description:
            "Design moderno que passa credibilidade.",
    },
    {
        badge: "Conversão",
        title: "Foco em Vendas",
        description:
            "Copywriting voltado para o seu WhatsApp.",
    },
    {
        badge: "Mobile",
        title: "100% Responsivo",
        description:
            "Experiência perfeita em qualquer tela.",
    },
];

export default function CardShowcase() {
    const [displayCards, setDisplayCards] = useState<
        typeof ALL_CARDS
    >([]);

    useEffect(() => {
        // 1. Embaralha a lista original (Algoritmo de Fisher-Yates simplificado)
        const shuffled = [...ALL_CARDS].sort(
            () => 0.5 - Math.random()
        );

        // 2. Pega apenas os 2 primeiros
        setDisplayCards(shuffled.slice(0, 2));
    }, []);

    // Enquanto não sorteia, retornamos vazio para evitar "pulo" visual
    if (displayCards.length === 0)
        return <div className="h-48 w-80" />;

    return (
        <div className="relative flex mt-10 lg:mt-0 lg:flex-col flex-col gap-6 w-full items-center lg:items-end md:flex-row">
            {displayCards.map((card, index) => (
                <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={
                        index === 0
                            ? "lg:odd:translate-x-12 w-full max-w-[320px]"
                            : "lg:even:--translate-x-6 w-full max-w-[320px]"
                    }
                >
                    <FeatureCard
                        badge={card.badge}
                        title={card.title}
                        description={card.description}
                    />
                </motion.div>
            ))}
        </div>
    );
}
