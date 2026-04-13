import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="relative py-20 px-5 flex justify-center border-t border-white/10">
            <footer className="w-full max-w-5xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 px-8 border-t border-white/5 pt-12 text-sm text-gray-400">
                {/* Perfil */}
                <div className="flex items-start gap-4">
                    <div className="lg:w-30 sm:w-36 w-32 h-16 rounded-full  overflow-hidden border border-white/20 flex items-center justify-center">
                        {/* Substitua pelo componente <Image /> do Next.js */}
                        {/* <div className="w-full h-full bg-gray-800 flex items-center justify-center text-[10px]">
                            TH
                        </div> */}
                        <Image
                            src="/tiago.jpg"
                            alt="Tiago Henrique"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold text-lg">
                            Tiago Henrique
                        </h3>
                        <p className="leading-relaxed">
                            Desenvolvedor Web focado em
                            landing pages e sites modernos.
                        </p>
                    </div>
                </div>

                {/* Contato */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold">
                        Contato
                    </h3>
                    <div className="space-y-3">
                        <Link
                            href="mailto:comercialthll@gmail.com"
                            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                            id="footer-email-link"
                            data-track="footer-email-link"
                        >
                            <Mail size={18} />{" "}
                            comercialthll@gmail.com
                        </Link>
                        <Link
                            href="https://wa.me/5534996805599"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-green-400 transition-colors"
                            id="footer-whatsapp-link"
                            data-track="footer-whatsapp-link"
                        >
                            <MessageCircle size={18} /> (34)
                            99680-5599
                        </Link>
                    </div>
                </div>

                {/* Links Rápidos */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold">
                        Início
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/#projetos"
                                className="hover:text-white transition-colors"
                                id="footer-projetos-link"
                                data-track="footer-projetos-link"
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#cta"
                                className="hover:text-white transition-colors"
                                id="footer-cta-link"
                                data-track="footer-cta-link"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="col-span-1 md:col-span-3 text-center pt-8 opacity-50">
                    <p>
                        Projetos desenvolvidos com foco em
                        performance, clareza e conversão.
                    </p>
                    <p className="mt-2">
                        © 2026 — Todos os direitos
                        reservados.
                    </p>
                </div>
            </footer>
        </section>
    );
}
