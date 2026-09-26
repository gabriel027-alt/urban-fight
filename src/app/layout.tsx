import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanfight.com.br"),
  title: "URBAN FIGHT | Centro de Treinamento de Artes Marciais & Alta Performance - Montes Claros",
  description:
    "O maior centro de combate e evolução atlética do Norte de Minas. Boxe Tradicional, Muay Thai, Jiu-Jitsu, Jeet Kune Do e Turmas Kids sob a liderança do Mestre André. Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros - MG.",
  alternates: {
    canonical: "https://urbanfight.com.br",
  },
  keywords: [
    "artes marciais Montes Claros",
    "boxe Montes Claros",
    "muay thai Montes Claros",
    "jiu jitsu Montes Claros",
    "defesa pessoal Montes Claros",
    "taekwondo kids Montes Claros",
    "Mestre André",
    "Urban Fight Santo Expedito",
    "fight club Montes Claros",
  ],
  authors: [{ name: "Urban Fight Montes Claros" }],
  icons: {
    icon: [
      { url: "/logo-urban-fight.jpg" },
      { url: "/logo-urban-fight.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo-urban-fight.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/logo-urban-fight.jpg",
    apple: [
      { url: "/logo-urban-fight.jpg" },
      { url: "/logo-urban-fight.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "URBAN FIGHT | Centro de Artes Marciais & Alta Performance - Montes Claros",
    description:
      "Transforme sua mente e seu corpo. Agende sua Aula Experimental Gratuita na Av. Cula Mangabeira, 1497 - Santo Expedito.",
    url: "https://urbanfight.com.br",
    siteName: "Urban Fight Montes Claros",
    images: [
      {
        url: "/logo-urban-fight.jpg",
        width: 800,
        height: 800,
        alt: "Logo Oficial Urban Fight Montes Claros",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URBAN FIGHT | Centro de Artes Marciais & Alta Performance - Montes Claros",
    description:
      "Transforme sua mente e seu corpo. Agende sua Aula Experimental Gratuita na Av. Cula Mangabeira, 1497 - Santo Expedito.",
    images: ["/logo-urban-fight.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "ExerciseGym", "LocalBusiness"],
  name: "Urban Fight Montes Claros",
  alternateName: "Urban Fight Centro de Artes Marciais & Alta Performance",
  image: "https://urbanfight.com.br/logo-urban-fight.jpg",
  "@id": "https://urbanfight.com.br/#organization",
  url: "https://urbanfight.com.br",
  telephone: "+5538998765432",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Cula Mangabeira, 1497",
    addressLocality: "Montes Claros",
    addressRegion: "MG",
    postalCode: "39401-002",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -16.7327,
    longitude: -43.8643,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Mestre André",
    jobTitle: "Head Coach & Fundador",
  },
  sameAs: ["https://instagram.com/urbanfight_oficial"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark scroll-smooth overflow-x-hidden max-w-[100vw] w-full ${bebasNeue.variable} ${chakraPetch.variable} ${inter.variable}`}
    >
      <head>
        <link rel="canonical" href="https://urbanfight.com.br" />
        <link rel="apple-touch-icon" href="/logo-urban-fight.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#050505] text-zinc-100 antialiased selection:bg-red-600 selection:text-white min-h-screen flex flex-col overflow-x-hidden max-w-[100vw] w-full relative">
        {children}
      </body>
    </html>
  );
}

