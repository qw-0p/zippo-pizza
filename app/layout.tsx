import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import { Header } from "@/components/shared";

const nunito = Nunito({
  subsets: ['latin'],
  variable: "--font-nunito",
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Zippo Pizza",
  description: "Ordering some pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
