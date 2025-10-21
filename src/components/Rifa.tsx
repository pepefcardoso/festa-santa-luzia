"use client";

import { useState } from "react";
import { enviarInscricaoRifa } from "@/lib/googleSheets";
import type { InscricaoRifa } from "@/types";

export default function Rifa() {
    const [formData, setFormData] = useState<InscricaoRifa>({
        nome: "",
        email: "",
        telefone: "",
        quantidade: 1,
        mensagem: "",
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
            const resultado = await enviarInscricaoRifa(formData);

            if (resultado.success) {
                setStatus({
                    tipo: "success",
                    mensagem:
                        "Inscrição enviada com sucesso! Em breve entraremos em contato.",
                });
                setFormData({
                    nome: "",
                    email: "",
                    telefone: "",
                    quantidade: 1,
                    mensagem: "",
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
            })
        }
    };

    return (
        <section id="rifa" className="py-20 bg-gradient-to-br from-hunter-green via-asparagus to-yellow-green relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="bg-bittersweet-shimmer text-white font-display font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                            🎁 GRANDE SORTEIO
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        Participe da Rifa
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Concorra a prêmios incríveis e ajude nossa comunidade!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
                            <h3 className="text-2xl font-serif font-bold text-hunter-green mb-6">
                                Prêmios da Rifa
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-3xl">🏆</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-display font-semibold text-yellow-900 uppercase">
                                                1º Prêmio
                                            </p>
                                            <p className="text-xl font-serif font-bold text-white">
                                                Smart TV 50 polegadas
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg p-5 shadow-md">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🎁</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-display font-semibold text-gray-700 uppercase">
                                                2º Prêmio
                                            </p>
                                            <p className="text-lg font-serif font-bold text-gray-800">
                                                Cesta de Natal Premium
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-5 shadow-md">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🎉</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-display font-semibold text-orange-900 uppercase">
                                                3º Prêmio
                                            </p>
                                            <p className="text-lg font-serif font-bold text-white">
                                                Vale-compras R$ 500
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-parchment-800 rounded-lg">
                                <h4 className="font-display font-semibold text-hunter-green mb-3">
                                    Informações do Sorteio:
                                </h4>
                                <ul className="space-y-2 text-hunter-green-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Valor: R$ 5,00 por número</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Sorteio: 13/12/2025 às 20h</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-asparagus mt-0.5">✓</span>
                                        <span>Total de números: 5.000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
                            <h3 className="text-2xl font-serif font-bold text-hunter-green mb-6">
                                Faça sua Inscrição
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="nome"
                                        className="block text-sm font-display font-semibold text-hunter-green mb-2"
                                    >
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-display font-semibold text-hunter-green mb-2"
                                    >
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="telefone"
                                        className="block text-sm font-display font-semibold text-hunter-green mb-2"
                                    >
                                        Telefone/WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors"
                                        placeholder="(48) 99999-9999"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantidade"
                                        className="block text-sm font-display font-semibold text-hunter-green mb-2"
                                    >
                                        Quantidade de Números *
                                    </label>
                                    <input
                                        type="number"
                                        id="quantidade"
                                        name="quantidade"
                                        value={formData.quantidade}
                                        onChange={handleChange}
                                        min="1"
                                        max="50"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors"
                                    />
                                    <p className="text-xs text-hunter-green-500 mt-1">
                                        Total: R$ {(formData.quantidade * 5).toFixed(2)}
                                    </p>
                                </div>

                                <div>
                                    <label
                                        htmlFor="mensagem"
                                        className="block text-sm font-display font-semibold text-hunter-green mb-2"
                                    >
                                        Mensagem (Opcional)
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors resize-none"
                                        placeholder="Deixe uma mensagem..."
                                    />
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