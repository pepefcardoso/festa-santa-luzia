"use client";

import { useState } from "react";
import type { Barraca } from "@/types";
import barracas from "@/data/barracas";

export default function Barracas() {
  const [filtroAtivo, setFiltroAtivo] = useState<string>("todas");

  const categorias = [
    { id: "todas", label: "Todas", icon: "🎪" },
    { id: "comida", label: "Comidas", icon: "🍽️" },
    { id: "bebida", label: "Bebidas", icon: "🍺" },
    { id: "entretenimento", label: "Diversão", icon: "🎯" },
    { id: "religioso", label: "Religioso", icon: "✝️" },
  ];

  const barracasFiltradas =
    filtroAtivo === "todas"
      ? barracas
      : barracas.filter((b) => b.categoria === filtroAtivo);

  const getIconeCategoria = (categoria: Barraca["categoria"]) => {
    switch (categoria) {
      case "comida":
        return "🍽️";
      case "bebida":
        return "🍺";
      case "entretenimento":
        return "🎯";
      case "religioso":
        return "✝️";
      default:
        return "🎪";
    }
  };

  return (
    <section id="barracas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Barracas</h2>
        <p className="section-subtitle">
          Delícias gastronômicas e diversão para toda a família
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltroAtivo(cat.id)}
              className={`font-display font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                filtroAtivo === cat.id
                  ? "bg-hunter-green text-white shadow-lg scale-105"
                  : "bg-parchment-700 text-hunter-green hover:bg-parchment-600"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {barracasFiltradas.map((barraca) => (
            <div
              key={barraca.id}
              className="bg-parchment-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-asparagus to-yellow-green flex items-center justify-center">
                <span className="text-6xl">
                  {getIconeCategoria(barraca.categoria)}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-serif font-bold text-hunter-green">
                    {barraca.nome}
                  </h3>
                  <span className="text-2xl">
                    {getIconeCategoria(barraca.categoria)}
                  </span>
                </div>

                <p className="text-hunter-green-600 mb-4">
                  {barraca.descricao}
                </p>

                {barraca.responsavel && (
                  <div className="pt-4 border-t border-hunter-green-800">
                    <p className="text-sm text-hunter-green-500">
                      <span className="font-display font-semibold">
                        Responsável:
                      </span>{" "}
                      {barraca.responsavel}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {barracasFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-hunter-green-500">
              Nenhuma barraca encontrada nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
