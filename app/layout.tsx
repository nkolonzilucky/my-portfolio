import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucky Nkolonzi",
  description: "Lucky Nkolonzi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
      <header className="bg-black text-white py-4 px-6 font-semibold">
        Portfolio Design
      </header>
      
        {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>

         {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-12">
        &copy; {new Date().getFullYear()} Lucky Nkolonzi - All Rights Reserved
      </footer>
      </body>
    </html>
  );
}
