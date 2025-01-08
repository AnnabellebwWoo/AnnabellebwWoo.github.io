import type { Metadata } from "next";
import { Antic_Didone, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const anticDidone = Antic_Didone({
  subsets: ['latin'],
  weight: '400', // Specify weight if needed
  variable: '--font-antic-didone',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "Belle Reve",
  description: "A lifestyle blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anticDidone.variable} ${playfairDisplay.variable}`}>
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}