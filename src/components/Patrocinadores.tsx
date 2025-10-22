import patrocinadores from "@/data/patrocinadores";
import SectionHeader from "./SectionHeader";
import CategoryTitle from "./CategoryTitle";
import PatrocinadorCard from "./PatrocinadorCard";
import { CTAButton } from "./CTAButton";

export default function Patrocinadores() {
  const categorias = [
    {
      id: "ouro",
      label: "Patrocinadores Ouro",
      cor: "from-yellow-500 to-yellow-600",
      grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    },
    {
      id: "prata",
      label: "Patrocinadores Prata",
      cor: "from-gray-300 to-gray-400",
      grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    },
    {
      id: "bronze",
      label: "Patrocinadores Bronze",
      cor: "from-orange-600 to-orange-700",
      grid: "grid-cols-2 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      id: "apoiador",
      label: "Apoiadores",
      cor: "from-asparagus to-yellow-green",
      grid: "grid-cols-2 md:grid-cols-4 lg:grid-cols-5",
    },
  ];

  return (
    <section id="patrocinadores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Patrocinadores"
          subtitle="Agradecemos às empresas e pessoas que apoiam nossa festa"
        />

        <div className="max-w-7xl mx-auto space-y-16">
          {categorias.map((categoria) => {
            const patrocinadoresCategoria = patrocinadores.filter(
              (p) => p.categoria === categoria.id
            );

            if (patrocinadoresCategoria.length === 0) return null;

            return (
              <div key={categoria.id}>
                <CategoryTitle label={categoria.label} color={categoria.cor} />
                <div className={`grid gap-8 ${categoria.grid}`}>
                  {patrocinadoresCategoria.map((patrocinador) => (
                    <PatrocinadorCard
                      key={patrocinador.id}
                      patrocinador={patrocinador}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-hunter-green to-asparagus rounded-lg p-8 text-center shadow-xl">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Seja um Patrocinador
          </h3>
          <p className="text-white mb-6 text-lg">
            Ajude a fazer nossa festa ainda melhor! Entre em contato para
            conhecer as cotas de patrocínio e os benefícios para sua empresa.
          </p>
          <CTAButton
            href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_CLEAN}`}
            variant="secondary"
            className="inline-block"
          >
            Entre em Contato
          </CTAButton>
        </div>
      </div>
    </section>
  );
}