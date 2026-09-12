import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "URBAN FIGHT | Centro de Artes Marciais & Alta Performance - Montes Claros MG",
  description:
    "Transforme sua mente e seu corpo no maior centro de artes marciais de Montes Claros. Boxe Tradicional, Muay Thai, Jiu-Jitsu, Jeet Kune Do, Defesa Pessoal e Turmas Kids sob a liderança do Mestre André. Av. Cula Mangabeira, 1497 - Santo Expedito.",
  keywords: [
    "artes marciais Montes Claros",
    "boxe Montes Claros",
    "muay thai Montes Claros",
    "jiu jitsu Montes Claros",
    "defesa pessoal Montes Claros",
    "taekwondo kids Montes Claros",
    "Mestre André",
    "Urban Fight Santo Expedito",
    "academia de luta Montes Claros",
  ],
  authors: [{ name: "Urban Fight Montes Claros" }],
  openGraph: {
    title: "URBAN FIGHT | Artes Marciais de Elite em Montes Claros",
    description:
      "Agende sua Aula Experimental Gratuita. Boxe, Muay Thai, Jiu-Jitsu, Jeet Kune Do e Turmas Kids. Santo Expedito, Montes Claros - MG.",
    url: "https://urbanfight.com.br",
    siteName: "Urban Fight",
    locale: "pt_BR",
    type: "website",
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
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-combat-950 text-zinc-100 antialiased selection:bg-red-600 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
