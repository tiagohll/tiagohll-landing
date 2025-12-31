"use client";

import { motion } from "framer-motion";

export default function Card({
    title,
    description,
    icon,
    index = 0,
}: {
    index?: number;
    icon?: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{
                once: true,
                margin: "0px 0px -50px 0px",
            }}
            className="relative h-fit w-80 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 duration-200"
        >
            <div className="flex flex-col gap-2">
                <div className="text-outline">{icon}</div>

                <h2 className="font-bold text-tprimary">
                    {title}
                </h2>
                <p className="text-sm text-tsecondary">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
