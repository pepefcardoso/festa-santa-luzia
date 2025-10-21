import infofesta from "@/data/info";

export default function Localizacao() {
  const { endereco, coordenadas } = infofesta;
  const enderecoCompleto = `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade}/${endereco.estado}`;
  const googleMapsUrl = `https://www.google.com/maps?q=${coordenadas.lat},${coordenadas.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${coordenadas.lat},${coordenadas.lng}&navigate=yes`;

  return (
    <section id="localizacao" className="py-20 bg-parchment-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Localização</h2>
        <p className="section-subtitle">
          Venha nos visitar na Paróquia Santa Luzia
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-hunter-green rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-hunter-green">
                    Endereço
                  </h3>
                </div>
                <p className="text-lg text-hunter-green-600 leading-relaxed">
                  {enderecoCompleto}
                </p>
                <p className="text-hunter-green-500 mt-2">
                  CEP: {endereco.cep}
                </p>
              </div>

              <div className="border-t border-hunter-green-800 pt-6">
                <h4 className="font-display font-semibold text-hunter-green mb-4">
                  Como Chegar:
                </h4>
                <div className="space-y-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-asparagus-900 rounded-lg hover:bg-asparagus-800 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-asparagus-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="font-display font-semibold text-hunter-green">
                      Abrir no Google Maps
                    </span>
                  </a>
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-asparagus-900 rounded-lg hover:bg-asparagus-800 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-asparagus-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.54 16.36c.18-.61.29-1.25.29-1.92 0-3.59-2.91-6.5-6.5-6.5-1.86 0-3.54.78-4.72 2.03-.45-.08-.92-.13-1.39-.13-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.86 0 3.54-.78 4.72-2.03.45.08.92.13 1.39.13 3.59 0 6.5-2.91 6.5-6.5 0-.67-.1-1.31-.29-1.92z" />
                    </svg>
                    <span className="font-display font-semibold text-hunter-green">
                      Navegar pelo Waze
                    </span>
                  </a>
                </div>
              </div>

              <div className="border-t border-hunter-green-800 pt-6 mt-6">
                <h4 className="font-display font-semibold text-hunter-green mb-3">
                  Informações Úteis:
                </h4>
                <ul className="space-y-2 text-hunter-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-asparagus mt-1">✓</span>
                    <span>Estacionamento disponível no local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-asparagus mt-1">✓</span>
                    <span>Acesso para pessoas com mobilidade reduzida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-asparagus mt-1">✓</span>
                    <span>Área coberta e ao ar livre</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px] lg:h-auto">
              <iframe
                src={`https://www.google.com/maps?q=${coordenadas.lat},${coordenadas.lng}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Paróquia Santa Luzia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
