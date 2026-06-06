import type { Metadata } from "next";
import Header from "@/components/header";
import "../styles/globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Aqui&Lá",
  description: "Site de Agência de Viagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
