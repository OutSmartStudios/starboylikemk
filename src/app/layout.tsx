import type { Metadata } from "next";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"


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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
