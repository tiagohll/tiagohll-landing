import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTA from "@/components/PaginaInicial/cta";
import Hero from "@/components/PaginaInicial/hero";
import HowItWorks from "@/components/PaginaInicial/howItWorks";
import Projects from "@/components/PaginaInicial/projects";
import Services from "@/components/PaginaInicial/services";

export default function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <div className="bg-mesh-container">
                    <Hero />
                    <Services />
                </div>
                <HowItWorks />
                <div className="bg-mesh-container">
                    <Projects />
                    <CTA />
                </div>
                <Footer />
                <div className="relative z-30 mx-auto w-full max-w-[78.5rem] px-5"></div>
            </main>
        </>
    );
}
