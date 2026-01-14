"use client";

import { useEffect } from "react";

export default function AnalyticsTracker() {
    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            const target = (
                event.target as HTMLElement
            ).closest("button, a");

            if (target) {
                const el = target as HTMLElement;
                const buttonIdentifier =
                    el.getAttribute("data-track") ||
                    el.id ||
                    el.innerText?.trim().slice(0, 20) ||
                    "unnamed_element";

                const payload = {
                    site_id:
                        process.env.NEXT_PUBLIC_SITE_ID,
                    event_type: "click",
                    path: window.location.pathname,
                    visitor_hash: buttonIdentifier,
                };

                fetch(
                    process.env.NEXT_PUBLIC_ANALYTICS_URL!,
                    {
                        method: "POST",
                        body: JSON.stringify(payload),
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        keepalive: true,
                    }
                ).catch(() => {});
            }
        };

        document.addEventListener(
            "click",
            handleGlobalClick
        );
        return () =>
            document.removeEventListener(
                "click",
                handleGlobalClick
            );
    }, []);

    return null;
}
