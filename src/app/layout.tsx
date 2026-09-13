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
    icon: "/logo-urban-fight.jpg",
    shortcut: "/logo-urban-fight.jpg",
    apple: "/logo-urban-fight.jpg",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark scroll-smooth ${bebasNeue.variable} ${chakraPetch.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-[#050505] text-zinc-100 antialiased selection:bg-red-600 selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
