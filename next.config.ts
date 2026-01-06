import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Content-Security-Policy",
                        value:
                            "default-src 'self'; " +
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; " +
                            "img-src 'self' http://localhost:3000 https://tiagohll-control.vercel.app https://www.google-analytics.com data:; " +
                            "connect-src 'self' http://localhost:3000 https://tiagohll-control.vercel.app https://www.google-analytics.com ; " +
                            "style-src 'self' 'unsafe-inline'; " +
                            "object-src 'none';",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "geolocation=(), microphone=(), camera=()",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
