import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jgcom.fr"),
  title: {
    default: "JGCOM : prestataire événementiel premium en Île-de-France",
    template: "%s | JGCOM",
  },
  description:
    "JGCOM conçoit et déploie des prestations techniques événementielles premium : sonorisation, éclairage, vidéo, structures, scènes, tentes et mobilier pour entreprises, collectivités et agences.",
  keywords: [
    "prestataire événementiel",
    "prestataire technique événementiel",
    "sonorisation événementielle",
    "éclairage événementiel",
    "vidéo événementielle",
    "location matériel événementiel",
    "prestataire événementiel Île-de-France",
    "prestation technique événementielle Paris",
  ],
  openGraph: {
    title: "JGCOM : prestataire événementiel premium en Île-de-France",
    description:
      "Des dispositifs techniques élégants, fiables et pensés pour la conversion de vos événements professionnels.",
    url: "https://jgcom.fr",
    siteName: "JGCOM",
    images: [
      {
        url: "/IMG_6016.jpeg",
        width: 1200,
        height: 630,
        alt: "Installation événementielle JGCOM",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
