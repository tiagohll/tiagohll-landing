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
        // Lógica de debounce e token de visita
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

        const lastTrack =
            localStorage.getItem("_track_last");
        const now = Date.now();

        // Evita disparos repetidos em menos de 30s
        if (lastTrack && now - Number(lastTrack) < 30000)
            return;

        const urlParams = new URLSearchParams(
            window.location.search
        );
        const utmSource = urlParams.get("utm_source");
        const ENDPOINT =
            process.env.NEXT_PUBLIC_ANALYTICS_URL ||
            "https://tiagohll-control.vercel.app/api/track";

        fetch(ENDPOINT, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                site_id: siteId,
                path:
                    window.location.pathname +
                    window.location.search,
                visitor_hash: token,
                event_type: utmSource
                    ? `qr_${utmSource}`
                    : "page_view",
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
    }, [pathname, siteId]);

    return null;
}
