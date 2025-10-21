import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Festa de Santa Luzia 2025 | Paróquia Santa Luzia - Tubarão/SC",
  description:
    "Venha celebrar a Festa de Santa Luzia 2025 na Paróquia Santa Luzia em Tubarão/SC. Programação completa, barracas, sorteios e muito mais!",
  keywords:
    "Festa Santa Luzia, Paróquia, Tubarão, SC, Santa Catarina, Festa Religiosa, Católica",
  openGraph: {
    title: "Festa de Santa Luzia 2025",
    description:
      "Venha celebrar conosco! Programação, barracas e diversão para toda família.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}