import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/Images/Logo.png',
        sizes: '32x32',
      },
      {
        url: '/Images/Logo.png',
        sizes: '16x16',
      }
    ],
    apple: {
      url: '/Images/Logo.png',
      sizes: '180x180',
    },
    shortcut: '/Images/Logo.png',
  },
  title: "Atlanticimmo",
  description: "Atlanticimmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
