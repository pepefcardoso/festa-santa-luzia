import type { InscricaoRifa } from "@/types";

// Configure estas variáveis no arquivo .env.local:
// NEXT_PUBLIC_GOOGLE_SHEETS_URL=sua_url_do_google_apps_script

export async function enviarInscricaoRifa(
  dados: InscricaoRifa
): Promise<{ success: boolean; message: string }> {
  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!url) {
      throw new Error("URL do Google Sheets não configurada");
    }

    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors", // Necessário para Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dados,
        dataHora: new Date().toISOString(),
      }),
    });

    // Com mode: 'no-cors', não podemos ler a resposta
    // Assumimos sucesso se não houver erro
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

/*
 * INSTRUÇÕES PARA CONFIGURAR O GOOGLE SHEETS:
 *
 * 1. Crie uma planilha no Google Sheets
 * 2. Vá em Extensões > Apps Script
 * 3. Cole o código abaixo no editor:
 *
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *
 *   sheet.appendRow([
 *     data.dataHora,
 *     data.nome,
 *     data.email,
 *     data.telefone,
 *     data.quantidade,
 *     data.mensagem || ''
 *   ]);
 *
 *   return ContentService.createTextOutput(JSON.stringify({ success: true }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * 4. Clique em "Implantar" > "Nova implantação"
 * 5. Escolha "Aplicativo da Web"
 * 6. Configure:
 *    - Executar como: Eu (seu email)
 *    - Quem tem acesso: Qualquer pessoa
 * 7. Clique em "Implantar" e copie a URL
 * 8. Cole a URL no arquivo .env.local como NEXT_PUBLIC_GOOGLE_SHEETS_URL
 *
 * A primeira linha da planilha deve ter os cabeçalhos:
 * Data/Hora | Nome | Email | Telefone | Quantidade | Mensagem
 */
