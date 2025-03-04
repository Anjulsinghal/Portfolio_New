import Head from "next/head";
import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Anjul Singhal | Software Engineer",
  description: "Software engineer and Programmer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        {/* <title>Anjul Singhal | Software Engineer & Web Developer</title> */}
        <meta name="description" content="Anjul Singhal is a software engineer specializing in web development, AI integration, and scalable applications using Next.js and MERN stack." />
        <meta name="keywords" content="Anjul Singhal, Web Developer, Software Engineer, Next.js, MERN Stack, AI, JavaScript, React, Portfolio" />
        <meta name="author" content="Anjul Singhal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anjul Singhal | Software Engineer & Web Developer" />
        <meta property="og:description" content="Explore Anjul Singhal's portfolio showcasing AI-driven projects, Next.js applications, and innovative software solutions." />
        <meta property="og:url" content="https://anjul.live" />
        <meta property="og:image" content="https://drive.google.com/file/d/1Tfz_9a49rz0YtHSSvqwXSamPM73rzQtP/view?usp=drive_link" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anjul Singhal | Software Engineer & Web Developer" />
        <meta name="twitter:description" content="Explore Anjul Singhal's portfolio showcasing AI-driven projects, Next.js applications, and innovative software solutions." />
        <meta name="twitter:image" content="https://drive.google.com/file/d/1Tfz_9a49rz0YtHSSvqwXSamPM73rzQtP/view?usp=drive_link" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://anjul.live" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
