import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serviciossim.cl/"),
  title: "Correas Transportadoras para Minería | SIM",
  description: "En SIM nos especializamos en la mantenimiento y arriendo de correas transportadoras para minería chilena. Contáctanos para más información.",
  keywords: ["correas transportadoras", "minería", "mantenimiento", "arriendo", "mineria chile", "correas transporadoras chile", "correas transportadoras minería"],
  alternates: {
    canonical: "https://www.serviciossim.cl/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/public/favicon/favicon.ico",
    apple: "/public/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
