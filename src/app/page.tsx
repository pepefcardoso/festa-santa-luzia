import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programacao from "@/components/Programacao";
import Barracas from "@/components/Barracas";
import Localizacao from "@/components/Localizacao";
import Rifa from '@/components/Rifa';
import Patrocinadores from "@/components/Patrocinadores";
import Footer from '@/components/Footer';
import Galeria from "@/components/Galeria";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Programacao />
        <Barracas />
        <Galeria />
        <Localizacao />
        <Rifa />
        <Patrocinadores />
      </main>
      <Footer />
    </>
  );
}
