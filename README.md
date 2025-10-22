# 🎉 Site Festa Santa Luzia 2025

Site oficial da Festa de Santa Luzia 2025 - Capela Santa Luzia do Km60, Tubarão/SC

## 📋 Sobre o Projeto

Site institucional desenvolvido em Next.js 15 com TypeScript e Tailwind CSS v4, apresentando:

- ✨ Programação completa dos eventos
- 🎪 Informações sobre todas as barracas
- 📍 Localização e mapas interativos
- 🎟️ Sistema de inscrição para bingo (integrado com Google Sheets)
- 🤝 Galeria de patrocinadores
- 📱 Design responsivo e moderno

## 🚀 Tecnologias

- **Framework**: Next.js 15.5.6
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS v4
- **Fontes**: Google Fonts (Playfair Display, Inter, Montserrat)
- **Hospedagem**: Vercel

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
│   ├── Bingo.tsx         # Formulário de bingo
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
4. Adicione as variáveis de ambiente
5. Clique em Deploy

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

## 📄 Licença

Este projeto foi desenvolvido para a Capela Santa Luzia Km60 - Tubarão/SC.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento ou com a Capela Santa Luzia Km60 - Tubarão/SC.

---
