import type { InscricaoBingo } from "@/types";

export async function enviarInscricaoBingo(
  dados: InscricaoBingo
): Promise<{ success: boolean; message: string }> {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!url) {
      throw new Error("URL do Google Sheets não configurada");
    }

    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dados,
        dataHora: new Date().toISOString(),
      }),
    });

    return {
      success: true,
      message: "Inscrição enviada com sucesso!",
    };
  } catch (error) {
    console.error("Erro ao enviar inscrição:", error);
    return {
      success: false,
      message: "Erro ao enviar inscrição. Tente novamente.",
    };
  }
}
