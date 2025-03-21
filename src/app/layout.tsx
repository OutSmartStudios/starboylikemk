import type { Metadata } from "next";
import bringThaNoizeFont from "next/font/local";
import { Archivo_Black } from "next/font/google";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"


const bringThaNoize = bringThaNoizeFont({
  src: [
    {
      path: "../../public/fonts/bring_tha_noize/Bringthanoize.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/bring_tha_noize/Bringthanoize.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "StarboyLikeMk",
  description: "StarboyLikeMK Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${archivoBlack.className} ${bringThaNoize.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
