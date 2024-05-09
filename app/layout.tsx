import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Template",
  description: "E-Commerce Template generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
            <main className="flex-grow">
              {children}
            </main>
          <Footer/>
        </div>
        </CartProvider>
      </body>
    </html>
  );
}
