import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakpriz",
  description: "Application web de création de devis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
