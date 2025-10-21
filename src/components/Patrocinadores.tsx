import patrocinadores from "@/data/patrocinadores";
import Image from "next/image";

export default function Patrocinadores() {
  const categorias = [
    {
      id: "ouro",
      label: "Patrocinadores Ouro",
      cor: "from-yellow-500 to-yellow-600",
    },
    {
      id: "prata",
      label: "Patrocinadores Prata",
      cor: "from-gray-300 to-gray-400",
    },
    {
      id: "bronze",
      label: "Patrocinadores Bronze",
      cor: "from-orange-600 to-orange-700",
    },
    {
      id: "apoiador",
      label: "Apoiadores",
      cor: "from-asparagus to-yellow-green",
    },
  ];

  return (
    <section id="patrocinadores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Patrocinadores</h2>
        <p className="section-subtitle">
          Agradecemos às empresas e pessoas que apoiam nossa festa
        </p>

        <div className="max-w-7xl mx-auto space-y-16">
          {categorias.map((categoria) => {
            const patrocinadoresCategoria = patrocinadores.filter(
              (p) => p.categoria === categoria.id
            );

            if (patrocinadoresCategoria.length === 0) return null;

            return (
              <div key={categoria.id}>
                <div className="text-center mb-8">
                  <h3
                    className={`inline-block text-2xl font-display font-bold text-white px-8 py-3 rounded-full bg-gradient-to-r ${categoria.cor} shadow-lg`}
                  >
                    {categoria.label}
                  </h3>
                </div>

                <div
                  className={`grid gap-8 ${categoria.id === "ouro"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : categoria.id === "prata"
                      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                      : "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                    }`}
                >
                  {patrocinadoresCategoria.map((patrocinador) => (
                    <div
                      key={patrocinador.id}
                      className={`transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center`}
                    >
                      {patrocinador.site ? (
                        <a
                          href={patrocinador.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          {patrocinador.logo ? (
                            <div className="relative w-full h-32 rounded-lg shadow-lg overflow-hidden">
                              <Image
                                src={`/${patrocinador.logo}`}
                                alt={`Logo de ${patrocinador.nome}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-32 h-32 bg-hunter-green-800 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-5xl text-white font-bold">
                                {patrocinador.nome.charAt(0)}
                              </span>
                            </div>
                          )}
                        </a>
                      ) : (
                        <div className="w-full">
                          {patrocinador.logo ? (
                            <div className="relative w-full h-32 rounded-lg shadow-lg overflow-hidden">
                              <Image
                                src={`/${patrocinador.logo}`}
                                alt={`Logo de ${patrocinador.nome}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-32 h-32 bg-hunter-green-800 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-5xl text-white font-bold">
                                {patrocinador.nome.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
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
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_CLEAN}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-hunter-green font-display font-semibold px-8 py-4 rounded-lg hover:bg-parchment transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}