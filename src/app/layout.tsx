import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://festa-santa-luzia.app.vercel.app";
const siteName = "Festa de Santa Luzia 2025";
const siteDescription =
  "Venha celebrar a Festa de Santa Luzia 2025 na Capela Santa Luzia Km 60 em Tubarão/SC. Programação completa de 8 a 13 de dezembro, barracas de comida típica, bingo beneficente, música ao vivo e celebrações religiosas. Participe da maior festa religiosa da região!";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#386641",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Festa de Santa Luzia 2025 | Capela Santa Luzia Km 60 - Tubarão/SC",
    template: "%s | Festa de Santa Luzia 2025",
  },
  description: siteDescription,
  keywords: [
    "Festa Santa Luzia",
    "Festa Santa Luzia 2025",
    "Capela Santa Luzia",
    "Santa Luzia Km 60",
    "Tubarão SC",
    "Festa Religiosa Tubarão",
    "Festa Católica",
    "Paróquia Santa Luzia",
    "Bingo Beneficente",
    "Festa Comunitária",
    "Barracas de Comida",
    "Eventos Tubarão",
    "Celebração Católica",
    "Festa Dezembro 2025",
    "SC 390",
    "Festas Tradicionais SC",
  ],
  authors: [{ name: "Capela Santa Luzia Km 60" }],
  creator: "Capela Santa Luzia Km 60",
  publisher: "Capela Santa Luzia Km 60",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteName,
    title: "Festa de Santa Luzia 2025 | 8 a 13 de Dezembro",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/santa.png`,
        width: 1200,
        height: 630,
        alt: "Logo da Festa de Santa Luzia 2025",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Festa de Santa Luzia 2025",
    description: siteDescription,
    images: [`${siteUrl}/images/santa.png`],
    creator: "@capelasantaluziakm60",
  },

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: "seu-codigo-google-search-console",
  },

  category: "eventos",

  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Tubarão",
    "geo.position": "-28.468774;-49.067854",
    "ICBM": "-28.468774, -49.067854",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Festa de Santa Luzia 2025",
  "description": siteDescription,
  "startDate": "2025-12-08T15:00:00-03:00",
  "endDate": "2025-12-13T23:00:00-03:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Capela Santa Luzia Km 60",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SC-390, 4151",
      "addressLocality": "Tubarão",
      "addressRegion": "SC",
      "postalCode": "88702-874",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -28.468774,
      "longitude": -49.067854
    }
  },
  "organizer": {
    "@type": "ReligiousOrganization",
    "name": "Capela Santa Luzia Km 60",
    "url": siteUrl,
    "email": "capelasantaluziakm60@gmail.com",
    "telephone": "+55-48-99141-5292",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SC-390, 4151",
      "addressLocality": "Tubarão",
      "addressRegion": "SC",
      "postalCode": "88702-874",
      "addressCountry": "BR"
    }
  },
  "offers": {
    "@type": "Offer",
    "name": "Cartela de Bingo",
    "price": "15.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "url": `${siteUrl}/#bingo`
  },
  "image": `${siteUrl}/images/santa.png`,
  "url": siteUrl
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ReligiousOrganization",
  "name": "Capela Santa Luzia Km 60",
  "url": siteUrl,
  "logo": `${siteUrl}/images/santa.png`,
  "image": `${siteUrl}/images/santa.png`,
  "description": "Capela Santa Luzia localizada no Km 60 em Tubarão, Santa Catarina. Comunidade católica dedicada à Santa Luzia.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SC-390, 4151",
    "addressLocality": "Tubarão",
    "addressRegion": "SC",
    "postalCode": "88702-874",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -28.468774,
    "longitude": -49.067854
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-48-99141-5292",
    "email": "capelasantaluziakm60@gmail.com",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.facebook.com/CapelaSantaLuziaKm60",
    "https://www.instagram.com/capelasantaluziakm60/",
    "https://www.youtube.com/@capelasantaluziakm60"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}