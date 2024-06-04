import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Hussin Portfolio",
  description: "web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="max-w-[1450px] mx-auto">
        <div className="bg-background-color rounded-lg my-5">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
