"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics({
    siteId,
}: {
    siteId: string;
}) {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Definições de Identidade Diária
        const today = new Date().toISOString().slice(0, 10);
        let token = localStorage.getItem("_track_token");
        let tokenDate = localStorage.getItem("_track_date");

        if (!token || tokenDate !== today) {
            token = Math.random()
                .toString(36)
                .substring(2, 15);
            localStorage.setItem("_track_token", token);
            localStorage.setItem("_track_date", today);
        }

        // 2. Filtro de Fôlego (30 segundos)
        const lastTrack =
            localStorage.getItem("_track_last");
        const now = Date.now();
        if (lastTrack && now - Number(lastTrack) < 30000)
            return;

        // 3. Envio para a sua API
        // Substitua pela URL real do seu SaaS em produção
        const ENDPOINT =
            process.env.NEXT_PUBLIC_ANALYTICS_URL ||
            "https://tiagohll-control.vercel.app/api/track";

        fetch(ENDPOINT, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                site_id: siteId,
                path: pathname,
                visitor_token: token,
            }),
        })
            .then(() =>
                localStorage.setItem(
                    "_track_last",
                    Date.now().toString()
                )
            )
            .catch((err) =>
                console.error("Analytics Error:", err)
            );
    }, [pathname, siteId]); // Dispara toda vez que o pathname mudar

    return null; // Componente invisível
}
