"use client";
import React, { useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

interface Props {
    title: string;
    description: string;
    badge: string;
}

export default function FeatureCard({
    title,
    description,
    badge,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    // Valores do mouse
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Suavização do movimento (Spring)
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Mapeia a posição do mouse para graus de rotação
    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["15deg", "-15deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-15deg", "15deg"]
    );

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-48 w-80 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md cursor-pointer select-none"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="flex flex-col h-full justify-center"
            >
                <span className="mb-2 w-fit rounded-full bg-gradient-clean px-3 py-1 text-xs font-bold text-white">
                    {badge}
                </span>
                <h3 className="text-xl font-bold text-white">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-tsecundary">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
