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
  title: "starboylikemk | Official Website",
  description: "OneTimeAgain OUT NOW!",
  keywords: ["music", "artist", "starboylikemk", "starboylikemk Music"],
  icons: {
    icon: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://starboylikemk.com",
  },
  openGraph: {
    title: "starboylikemk | Official Website",
    description: "OneTimeAgain OUT NOW!",
    url: "https://starboylikemk.com", 
    siteName: "starboylikemk",
    images: [
      {
        url: "https://starboylikemk.com/images/background.png",
        width: 1200,
        height: 630,
        alt: "starboylikemk Music",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "starboylikemk",
    description: "starboylikemk Music",
    images: ["https://starboylikemk.com/images/background.png"], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicArtist",
    "name": "starboylikemk",
    "url": "https://starboylikemk.com",
    "logo": "https://starboylikemk.com/icons/logo.png",
    "description": "starboylikemk Music",
    "sameAs": [
      "https://www.youtube.com/channel/UCjsRVXSbljtu-86l6yJtSgQ",
      "https://www.tiktok.com/@starboylikemk",
      "https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf",
      "https://www.instagram.com/starboylikemk/",
      "https://soundcloud.com/starboylikemk"
    ]
  };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${archivoBlack.className} ${bringThaNoize.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
