import infofesta from "@/data/info";
import { heroStats } from "@/data/heroStats";
import { CTAButton } from "./CTAButton";
import { StatCard } from "./StatCard";
import { ScrollIndicator } from "./ScrollIndicator";
import { HeroBadge } from "./HeroBadge";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hunter-green via-asparagus to-yellow-green overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center py-24 sm:pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <HeroBadge text={infofesta.dataFrase} />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            {infofesta.titulo}
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12">
            Venha celebrar conosco! Programação especial, barracas deliciosas,
            música ao vivo e muito mais para toda a família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="#programacao" variant="primary">
              Ver Programação
            </CTAButton>
            <CTAButton href="#bingo" variant="secondary">
              Participar do Bingo
            </CTAButton>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {heroStats.map((stat, index) => (
              <StatCard
                key={index}
                emoji={stat.emoji}
                title={stat.title}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator href="#programacao" />
    </section>
  );
}