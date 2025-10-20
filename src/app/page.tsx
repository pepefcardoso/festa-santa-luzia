export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-parchment-900 p-4">
      <div className="max-w-md w-full p-8 bg-parchment rounded-lg shadow-lg text-center">

        <h1 className="text-3xl font-bold text-hunter-green">
          Olá, Mundo com Tailwind v4!
        </h1>

        <p className="mt-4 text-asparagus-700">
          Esta é a nossa paleta de cores personalizada em ação.
        </p>

        <div className="mt-6 p-4 bg-yellow-green rounded-md">
          <p className="font-semibold text-yellow-green-100">
            Esta área usa a cor Yellow Green!
          </p>
        </div>

        <button className="mt-6 px-4 py-2 font-semibold text-white bg-bittersweet-shimmer rounded-md hover:bg-bittersweet-shimmer-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bittersweet-shimmer-700 transition-colors">
          Botão Incrível
        </button>

      </div>

      <div className="mt-8 max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-lg font-semibold text-hunter-green-600">Amostra Completa da Paleta</h2>
        <div className="flex justify-around mt-4">
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-hunter-green" title="Hunter Green"></div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-asparagus" title="Asparagus"></div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-yellow-green" title="Yellow Green"></div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-parchment" title="Parchment"></div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-bittersweet-shimmer" title="Bittersweet Shimmer"></div>
        </div>
      </div>
    </main>
  );
}