"use client";

import { useState } from "react";
import { enviarInscricaoBingo } from "@/lib/googleSheets";
import type { InscricaoBingo } from "@/types";
import FormField from "./FormField";
import PremioCard from "./PremioCard";

export default function Bingo() {
    const [formData, setFormData] = useState<InscricaoBingo>({
        nome: "",
        endereco: "",
        telefone: "",
        quantidade: 1,
    });

    const [status, setStatus] = useState<{
        tipo: "idle" | "loading" | "success" | "error";
        mensagem: string;
    }>({
        tipo: "idle",
        mensagem: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "quantidade" ? parseInt(value) || 1 : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ tipo: "loading", mensagem: "Enviando inscrição..." });

        try {
            const resultado = await enviarInscricaoBingo(formData);

            if (resultado.success) {
                setStatus({
                    tipo: "success",
                    mensagem:
                        "Inscrição enviada com sucesso! Em breve entraremos em contato.",
                });
                setFormData({
                    nome: "",
                    endereco: "",
                    telefone: "",
                    quantidade: 1,
                });

                setTimeout(() => {
                    setStatus({ tipo: "idle", mensagem: "" });
                }, 5000);
            } else {
                setStatus({
                    tipo: "error",
                    mensagem: resultado.message,
                });
            }
        } catch (error) {
            console.error("Falha ao enviar inscrição:", error);
            setStatus({
                tipo: "error",
                mensagem: "Erro ao enviar inscrição. Tente novamente.",
            });
        }
    };

    const valorCartelaBingo = 15.0;

    return (
        <section id="bingo" className="py-20 bg-gradient-to-br from-hunter-green via-asparagus to-yellow-green relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="bg-bittersweet-shimmer text-white font-display font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                            🎁 GRANDE SORTEIO
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Participe do Bingo
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Concorra a prêmios incríveis e ajude nossa comunidade!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 flex flex-col">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-hunter-green mb-6">
                                    Prêmios do Bingo
                                </h3>

                                <PremioCard
                                    isDestaque
                                    icone="🏆"
                                    className="bg-gradient-to-br from-bittersweet-shimmer to-bittersweet-shimmer-400"
                                    titulo={<p className="text-sm font-display font-bold text-bittersweet-shimmer-100 uppercase tracking-wider">Cartela Cheia</p>}
                                    valor={<p className="text-3xl font-serif font-bold text-white drop-shadow-md">R$ 2.500,00</p>}
                                />

                                <div className="mt-8 space-y-4">
                                    <PremioCard
                                        icone="🏅"
                                        className="bg-gradient-to-r from-yellow-500 to-yellow-600"
                                        titulo={<p className="text-sm font-display font-semibold text-yellow-900 uppercase">1ª Linha</p>}
                                        valor={<p className="text-xl font-serif font-bold text-white">R$ 500,00</p>}
                                    />
                                    <PremioCard
                                        icone="🎁"
                                        className="bg-gradient-to-r from-gray-300 to-gray-400"
                                        titulo={<p className="text-sm font-display font-semibold text-gray-700 uppercase">2ª Linha</p>}
                                        valor={<p className="text-lg font-serif font-bold text-gray-800">R$ 500,00</p>}
                                    />
                                    <PremioCard
                                        icone="🎉"
                                        className="bg-gradient-to-r from-orange-600 to-orange-700"
                                        titulo={<p className="text-sm font-display font-semibold text-orange-900 uppercase">3ª Linha</p>}
                                        valor={<p className="text-lg font-serif font-bold text-white">R$ 500,00</p>}
                                    />
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-parchment-800 rounded-lg">
                                <h4 className="font-display font-semibold text-hunter-green mb-3">
                                    Informações do Sorteio:
                                </h4>
                                <ul className="space-y-2 text-hunter-green-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Valor: R$ {valorCartelaBingo.toFixed(2)} por cartela</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Sorteio: 13/12/2025 às 21:30h</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Responsáveis: Festeiros</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Local: Salão Paroquial Km 60</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
                            <h3 className="text-2xl font-serif font-bold text-hunter-green mb-6">
                                Faça sua Inscrição
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <FormField
                                    label="Nome Completo"
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Seu nome completo"
                                    required
                                />
                                <FormField
                                    label="Endereço"
                                    id="endereco"
                                    name="endereco"
                                    type="text"
                                    value={formData.endereco}
                                    onChange={handleChange}
                                    placeholder="Seu endereço completo"
                                    required
                                />
                                <FormField
                                    label="Telefone/WhatsApp"
                                    id="telefone"
                                    name="telefone"
                                    type="tel"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    placeholder="(48) 99999-9999"
                                    required
                                />

                                <div>
                                    <FormField
                                        label="Quantidade de Cartelas"
                                        id="quantidade"
                                        name="quantidade"
                                        type="number"
                                        value={formData.quantidade}
                                        onChange={handleChange}
                                        min="1"
                                        max="50"
                                        required
                                    />
                                    <p className="text-xs text-hunter-green-500 mt-1">
                                        Total: R$ {(formData.quantidade * valorCartelaBingo).toFixed(2)}
                                    </p>
                                </div>

                                {status.tipo !== "idle" && (
                                    <div
                                        className={`p-4 rounded-lg ${status.tipo === "success"
                                            ? "bg-asparagus-900 text-asparagus-600"
                                            : status.tipo === "error"
                                                ? "bg-bittersweet-shimmer-900 text-bittersweet-shimmer-600"
                                                : "bg-yellow-green-900 text-yellow-green-600"
                                            }`}
                                    >
                                        <p className="text-sm font-display font-semibold">
                                            {status.mensagem}
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status.tipo === "loading"}
                                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status.tipo === "loading"
                                        ? "Enviando..."
                                        : "Enviar Inscrição"}
                                </button>

                                <p className="text-xs text-hunter-green-500 text-center">
                                    Ao enviar, você receberá um contato para confirmar sua
                                    participação e forma de pagamento.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}