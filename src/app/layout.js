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

export const metadata = {
  title: "Abdul Maaz Qureshi | Full-Stack Developer Portfolio",
  description: "Portfolio of Abdul Maaz Qureshi – showcasing projects, skills in web development, React, Next.js, and more. Explore my work and get in touch!",
  openGraph: {
    title: "Abdul Maaz Qureshi | Full-Stack Developer Portfolio",
    description: "Portfolio of Abdul Maaz Qureshi – showcasing projects, skills in web development, React, Next.js, and more. Explore my work and get in touch!",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
