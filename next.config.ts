import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value:
                            "default-src 'self'; " +
                            "connect-src 'self' https://tiagohll-control.vercel.app; " + // Domínio autorizado
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                            "style-src 'self' 'unsafe-inline'; " +
                            "object-src 'none';",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
