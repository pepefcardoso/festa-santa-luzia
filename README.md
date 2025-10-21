# 🎉 Site Festa Santa Luzia 2025

Site oficial da Festa de Santa Luzia 2025 - Paróquia Santa Luzia, Tubarão/SC

## 📋 Sobre o Projeto

Site institucional desenvolvido em Next.js 15 com TypeScript e Tailwind CSS v4, apresentando:

- ✨ Programação completa dos eventos
- 🎪 Informações sobre todas as barracas
- 📍 Localização e mapas interativos
- 🎟️ Sistema de inscrição para rifa (integrado com Google Sheets)
- 🤝 Galeria de patrocinadores
- 📱 Design responsivo e moderno

## 🚀 Tecnologias

- **Framework**: Next.js 15.5.6
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Fontes**: Google Fonts (Playfair Display, Inter, Montserrat)
- **Hospedagem**: Vercel (recomendado)

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores personalizada:

- **Hunter Green** (#386641): Cor principal
- **Asparagus** (#6a994e): Cor secundária
- **Yellow Green** (#a7c957): Cor de destaque
- **Parchment** (#f2e8cf): Cor de fundo
- **Bittersweet Shimmer** (#bc4749): Cor de ação/CTA

## 📦 Instalação

### Pré-requisitos

- Node.js 20+ instalado
- npm, yarn ou pnpm

### Passo a passo

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd festa-santa-luzia
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## ⚙️ Configuração

### 1. Atualizar Informações da Festa

Edite o arquivo `src/data/info.ts` com os dados corretos:

```typescript
export const infoFesta: InfoFesta = {
  titulo: "Festa de Santa Luzia",
  subtitulo: "Paróquia Santa Luzia - Tubarão/SC",
  dataInicio: "2025-12-08",
  dataFim: "2025-12-13",
  endereco: {
    rua: "Rua Real da Festa", // ATUALIZAR
    numero: "123", // ATUALIZAR
    bairro: "Centro", // ATUALIZAR
    cidade: "Tubarão",
    estado: "SC",
    cep: "88700-000", // ATUALIZAR
  },
  coordenadas: {
    lat: -28.4754, // ATUALIZAR com coordenadas reais
    lng: -49.0069, // ATUALIZAR com coordenadas reais
  },
  redesSociais: {
    instagram: "https://instagram.com/paroquiasantaluzia", // ATUALIZAR
    facebook: "https://facebook.com/paroquiasantaluzia", // ATUALIZAR
  },
};
```

### 2. Configurar Integração com Google Sheets

#### Passo 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "Inscrições Rifa Santa Luzia 2025"
3. Na primeira linha, adicione os cabeçalhos:
   ```
   Data/Hora | Nome | Email | Telefone | Quantidade | Mensagem
   ```

#### Passo 2: Configurar Google Apps Script

1. Na planilha, vá em **Extensões** > **Apps Script**
2. Apague o código padrão e cole o seguinte:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.dataHora,
      data.nome,
      data.email,
      data.telefone,
      data.quantidade,
      data.mensagem || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Inscrição registrada com sucesso!",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Erro ao registrar inscrição: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Clique em **Salvar** (ícone de disquete)

#### Passo 3: Implantar o Script

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem > Selecione **Aplicativo da Web**
3. Configure:
   - **Descrição**: API Inscrições Rifa
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em **Implantar**
5. **Copie a URL gerada** (será algo como: `https://script.google.com/macros/s/...`)
6. Clique em **Concluído**

#### Passo 4: Configurar Variável de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/SUA_URL_AQUI/exec
```

2. Substitua `SUA_URL_AQUI` pela URL copiada no passo anterior

3. Reinicie o servidor de desenvolvimento

### 3. Adicionar Imagens

Organize as imagens na pasta `public/images/`:

```
public/
└── images/
    ├── logo.png (logo da paróquia)
    ├── hero/
    │   └── hero-bg.jpg (imagem de fundo do hero)
    ├── barracas/
    │   ├── barraca-1.jpg
    │   ├── barraca-2.jpg
    │   └── ...
    └── patrocinadores/
        ├── ouro1.png
        ├── ouro2.png
        ├── prata1.png
        └── ...
```

Para usar as imagens nos componentes, importe e use o componente `Image` do Next.js:

```typescript
import Image from "next/image";

<Image
  src="/images/logo.png"
  alt="Logo Santa Luzia"
  width={100}
  height={100}
/>;
```

### 4. Personalizar Dados

#### Programação (`src/data/programacao.ts`)

Edite os eventos conforme necessário. Marque eventos importantes com `destaque: true`.

#### Barracas (`src/data/barracas.ts`)

Adicione, remova ou edite as barracas. Categorias disponíveis:

- `comida`
- `bebida`
- `entretenimento`
- `religioso`
- `outro`

#### Patrocinadores (`src/data/patrocinadores.ts`)

Adicione os patrocinadores e suas categorias:

- `ouro`
- `prata`
- `bronze`
- `apoiador`

## 🎯 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout principal com fontes
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais e tema
├── components/
│   ├── Header.tsx       # Menu de navegação
│   ├── Hero.tsx         # Seção hero/banner
│   ├── Programacao.tsx  # Lista de eventos
│   ├── Barracas.tsx     # Grade de barracas
│   ├── Localizacao.tsx  # Mapa e endereço
│   ├── Rifa.tsx         # Formulário de rifa
│   ├── Patrocinadores.tsx # Logos de patrocinadores
│   └── Footer.tsx       # Rodapé
├── data/
│   ├── info.ts          # Informações gerais
│   ├── programacao.ts   # Eventos da festa
│   ├── barracas.ts      # Lista de barracas
│   └── patrocinadores.ts # Lista de patrocinadores
├── lib/
│   └── googleSheets.ts  # Integração com Sheets
└── types/
    └── index.ts         # Tipos TypeScript
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Adicione a variável de ambiente `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
5. Clique em Deploy

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ♿ Acessibilidade

- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos em imagens
- Estrutura semântica HTML5
- ARIA labels quando necessário

## 🐛 Solução de Problemas

### Erro: "Module not found"

```bash
# Limpe o cache e reinstale
rm -rf node_modules .next
npm install
```

### Tailwind não está funcionando

Verifique se o arquivo `postcss.config.mjs` está correto:

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### Formulário de rifa não envia

1. Verifique se a variável `NEXT_PUBLIC_GOOGLE_SHEETS_URL` está configurada
2. Teste a URL do Google Apps Script diretamente
3. Verifique se o script tem permissões corretas (Qualquer pessoa)
4. Abra o console do navegador para ver erros

## 📄 Licença

Este projeto foi desenvolvido para a Paróquia Santa Luzia - Tubarão/SC.

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe da paróquia.

---

Desenvolvido com ❤️ para a comunidade de Santa Luzia
