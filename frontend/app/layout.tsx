import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "André QA Portfolio",
  description:
    "Portfólio profissional de André Gonçalves com foco em QA Engineering, automação e qualidade de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}