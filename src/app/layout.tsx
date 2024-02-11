import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const poppins = Poppins({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "iM3MA | Missão Eis-Me Aqui",
  description: "Igreja Missão Eis-Me Aqui, menos que o mundo é pecado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
