"use client";

import { useState } from "react";
import { galeriaFotos } from "@/data/galeria";
import SectionHeader from "./SectionHeader";
import FotoCard from "./FotoCard";
import Image from "next/image";

export default function Galeria() {
    const [fotoSelecionada, setFotoSelecionada] = useState<{
        url: string;
        titulo: string;
        ano: number;
        categoria: string;
    } | null>(null);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const abrirLightbox = (
        url: string,
        titulo: string,
        ano: number,
        categoria: string,
        indice: number
    ) => {
        setFotoSelecionada({ url, titulo, ano, categoria });
        setIndiceAtual(indice);
    };

    const fecharLightbox = () => {
        setFotoSelecionada(null);
    };

    const navegarFoto = (direcao: "anterior" | "proxima") => {
        if (!fotoSelecionada) return;

        const todasFotos = galeriaFotos.flatMap((edicao) =>
            edicao.fotos.map((foto) => ({ ...foto, ano: edicao.ano }))
        );

        const novoIndice =
            direcao === "proxima"
                ? (indiceAtual + 1) % todasFotos.length
                : (indiceAtual - 1 + todasFotos.length) % todasFotos.length;

        setIndiceAtual(novoIndice);
        setFotoSelecionada(todasFotos[novoIndice]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") fecharLightbox();
        if (e.key === "ArrowRight") navegarFoto("proxima");
        if (e.key === "ArrowLeft") navegarFoto("anterior");
    };

    let fotoCounter = 0;

    return (
        <section id="galeria" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Galeria de Fotos"
                    subtitle="Reviva os melhores momentos das edições anteriores"
                />

                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-hunter-green-800 h-full"></div>

                        {galeriaFotos.map((edicao) => (
                            <div key={edicao.ano} className="mb-16 last:mb-0">
                                <div className="flex items-center justify-center mb-8">
                                    <div className="relative z-10 bg-gradient-to-r from-hunter-green to-asparagus text-white px-8 py-4 rounded-full shadow-lg">
                                        <div className="flex items-center gap-3">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                            <div>
                                                <p className="text-2xl font-serif font-bold">
                                                    Festa {edicao.ano}
                                                </p>
                                                <p className="text-sm text-white">
                                                    {edicao.fotos.length} fotos
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {edicao.fotos.map((foto) => {
                                        const currentIndex = fotoCounter++;
                                        return (
                                            <FotoCard
                                                key={currentIndex}
                                                foto={foto}
                                                onClick={() =>
                                                    abrirLightbox(
                                                        foto.url,
                                                        foto.titulo,
                                                        edicao.ano,
                                                        foto.categoria,
                                                        currentIndex
                                                    )
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {fotoSelecionada && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={fecharLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visualizador de imagem"
                >
                    <button
                        onClick={fecharLightbox}
                        className="absolute top-4 right-4 text-white hover:text-bittersweet-shimmer transition-colors duration-200 z-10"
                        aria-label="Fechar visualizador"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navegarFoto("anterior");
                        }}
                        className="absolute left-4 text-white hover:text-yellow-green transition-colors duration-200 z-10"
                        aria-label="Foto anterior"
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <div
                        className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={fotoSelecionada.url}
                                alt={fotoSelecionada.titulo}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                            <h3 className="text-white font-serif font-bold text-2xl mb-2">
                                {fotoSelecionada.titulo}
                            </h3>
                            <div className="flex items-center gap-4 text-white">
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    {fotoSelecionada.ano}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                                    </svg>
                                    {fotoSelecionada.categoria}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navegarFoto("proxima");
                        }}
                        className="absolute right-4 text-white hover:text-yellow-green transition-colors duration-200 z-10"
                        aria-label="Próxima foto"
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}