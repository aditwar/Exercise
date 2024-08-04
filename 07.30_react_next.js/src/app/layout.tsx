import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* inter.className ini dipanggil dari font yg diimport */}
      <body className={inter.className}>

        {/* //! ketik ini diatas {children} untuk menambahkan Navbar */}
        <Navbar />

        {/* {children} ini merupakan semua page.jsx */}
        {children}
      
        {/* ini tempat FOOTER selalu dibawah {children} */}
      </body>
    </html>
  );
}
