import infofesta from "@/data/info";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hunter-green via-asparagus to-yellow-green overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center py-24 sm:pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-parchment text-hunter-green font-display font-semibold px-6 py-2 rounded-full text-sm shadow-lg">
               {infofesta.dataFrase}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            {infofesta.titulo}
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12">
            Venha celebrar conosco! Programação especial, barracas deliciosas,
            música ao vivo e muito mais para toda a família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#programacao" className="btn-primary text-lg px-8 py-4">
              Ver Programação
            </Link>
            <Link
              href="#rifa"
              className="bg-white text-hunter-green font-display font-semibold px-8 py-4 rounded-lg hover:bg-parchment transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Participar da Rifa
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-2">📅</div>
              <p className="text-white font-display font-semibold mb-1">
                6 Dias
              </p>
              <p className="text-white text-sm">De celebração</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-2">🎪</div>
              <p className="text-white font-display font-semibold mb-1">
                13+ Barracas
              </p>
              <p className="text-white text-sm">Comidas e diversão</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-2">🎵</div>
              <p className="text-white font-display font-semibold mb-1">
                Shows ao Vivo
              </p>
              <p className="text-white text-sm">
                Música e entretenimento
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#programacao">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
