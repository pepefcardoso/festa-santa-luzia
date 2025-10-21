import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programacao from '@/components/Programacao';
import Barracas from '@/components/Barracas';
import Localizacao from '@/components/Localizacao';
// import Rifa from '@/components/Rifa';
import Patrocinadores from '@/components/Patrocinadores';
// import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programacao />
        <Barracas />
        <Localizacao />
        {/* <Rifa /> */}
        <Patrocinadores />
      </main>
      {/* <Footer /> */}
    </>
  );
}