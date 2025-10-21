import programacao from "@/data/programacao";

export default function Programacao() {
  return (
    <section id="programacao" className="py-20 bg-parchment-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Programação</h2>
        <p className="section-subtitle">
          Confira todos os eventos e celebrações da nossa festa
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {programacao.map((evento) => (
              <div
                key={evento.id}
                className={`relative ${
                  evento.destaque
                    ? "bg-gradient-to-r from-bittersweet-shimmer-100 to-bittersweet-shimmer-200"
                    : "bg-white"
                } rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
              >
                {evento.destaque && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-bittersweet-shimmer text-white text-xs font-display font-bold px-3 py-1 rounded-full">
                      DESTAQUE
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`${
                          evento.destaque
                            ? "bg-bittersweet-shimmer text-white"
                            : "bg-hunter-green text-white"
                        } rounded-lg p-4 text-center min-w-[120px]`}
                      >
                        <p className="text-sm font-display font-semibold uppercase tracking-wide">
                          {evento.dia}
                        </p>
                        <p className="text-2xl font-serif font-bold mt-1">
                          {evento.data}
                        </p>
                        <p className="text-lg font-display mt-2">
                          {evento.horario}
                        </p>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3
                        className={`text-2xl font-serif font-bold mb-2 ${
                          evento.destaque ? "text-white" : "text-hunter-green"
                        }`}
                      >
                        {evento.titulo}
                      </h3>
                      <p
                        className={`text-base mb-3 ${
                          evento.destaque
                            ? "text-parchment-200"
                            : "text-hunter-green-600"
                        }`}
                      >
                        {evento.descricao}
                      </p>
                      {evento.local && (
                        <div className="flex items-center gap-2">
                          <svg
                            className={`w-5 h-5 ${
                              evento.destaque
                                ? "text-parchment-300"
                                : "text-asparagus"
                            }`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span
                            className={`text-sm font-display ${
                              evento.destaque
                                ? "text-parchment-300"
                                : "text-hunter-green-500"
                            }`}
                          >
                            {evento.local}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
