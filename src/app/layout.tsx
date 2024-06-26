import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const gtText = localFont({
  src: "../../public/fonts/GT-Super-Text-Book.woff2",
  variable: "--font-gt-text",
});
const gtDisplay = localFont({
  src: "../../public/fonts/GT-Super-Display-Regular.woff2",
  variable: "--font-gt-display",
});
const gtAmerica = localFont({
  src: "../../public/fonts/GT-America-Standard-Medium.woff2",
  variable: "--font-gt-america",
});

export const metadata: Metadata = {
  title: "Storyworth",
  description: "Everyone has a story worth sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gtText.variable} ${gtDisplay.variable} ${gtAmerica.variable}`}
    >
      <link rel="icon" href="/storyworth-icon.png" />
      <body className="bg-white">{children}</body>
    </html>
  );
}
