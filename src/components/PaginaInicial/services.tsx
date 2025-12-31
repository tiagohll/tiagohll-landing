import {
    CloudCog,
    MonitorSmartphone,
    Rocket,
    Settings,
    Settings2,
} from "lucide-react";
import Card from "../Card";

export default function Services() {
    const services = [
        {
            icon: <MonitorSmartphone size={28} />,
            title: "Sites Institucionais",
            description:
                "Presença online profissional para gerar confiança e contato.",
        },
        {
            icon: <Rocket size={28} />,
            title: "Landing Pages",
            description:
                "Páginas focadas em conversão e captação de clientes.",
        },
        {
            icon: <Settings size={28} />,
            title: "Sistemas Simples",
            description:
                "Soluções sob medida para organização e controle.",
        },
    ];
    return (
        <section
            id="servicos"
            className="relative py-20 max-lg:pt-10 border-b border-white/10"
        >
            <div className="relative z-30 mx-auto w-full max-w-[78.5rem] px-5 flex md:flex-row flex-col items-start">
                <div className="md:w-1/2 w-full mb-10 lg:mb-0">
                    <div className="border border-white/10 bg-white/5 py-1 px-3 rounded-2xl w-fit text-sm flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-outline rounded-full shadow-[0_0_15px_#a38bff]" />
                        Serviços
                    </div>
                    <h2 className="text-4xl font-bold">
                        O que eu faço
                    </h2>
                    <p className="mt-4 text-tsecondary">
                        Desenvolvo sites e sistemas simples
                        para pequenos negócios que precisam
                        marcar presença online, organizar
                        processos ou vender mais pela
                        internet.
                        <br />
                        <br />
                        Meu foco é criar soluções rápidas,
                        fáceis de usar e pensadas para gerar
                        resultado sem complicação técnica.
                    </p>
                    <div className="border-b border-dashed my-9 border-white/10" />
                </div>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-1/2 max-w-5xl">
                    {/* Timeline (Linha e Pontos) */}
                    <div className="relative flex flex-row items-center justify-around min-w-[30px] md:hidden">
                        {/* Linha: Horizontal no mobile (w-full h-[2px]), Vertical no MD+ (w-[2px] h-full) */}
                        <div className="absolute w-full h-[2px] top-1/2 -translate-y-1/2 md:translate-y-0 md:w-[2px] md:h-full md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r md:bg-gradient-to-b from-[#7C5CFF] via-[#6A4DFF] to-transparent" />

                        {/* Pontos de Brilho */}
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="z-10 w-3 h-3 bg-[#A78BFF] rounded-full shadow-[0_0_15px_#A78BFF]"
                            />
                        ))}
                    </div>

                    <div className="relative flex-col items-center hidden md:flex">
                        {/* A Linha em si */}
                        <div className="absolute h-full w-[2px] bg-gradient-to-b from-[#7C5CFF] via-[#6A4DFF] to-transparent" />

                        {/* Pontos de Brilho (Glow) alinhados com o centro dos cards */}
                        <div className="flex flex-col h-full justify-around py-12 z-10">
                            <div className="w-3 h-3 bg-[#A78BFF] rounded-full shadow-[0_0_15px_#A78BFF]" />
                            <div className="w-3 h-3 bg-[#A78BFF] rounded-full shadow-[0_0_15px_#A78BFF]" />
                            <div className="w-3 h-3 bg-[#A78BFF] rounded-full shadow-[0_0_15px_#A78BFF]" />
                        </div>
                    </div>

                    {/* Grid de Cards: 1 coluna no mobile, 3 colunas no Desktop se preferir horizontal, ou manter coluna */}
                    <div className="flex md:flex-col gap-4 w-full h-fit">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
