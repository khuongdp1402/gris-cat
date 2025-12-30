import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import { NewsTicker, Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gris-Cat | Luxury Women's Fashion",
  description: "Elegant, Classic, with a touch of Balletcore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased bg-white dark:bg-[#1a202c] text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          {/* Global Announcement */}
          <NewsTicker />

          {/* Primary Navigation */}
          <Header />

          {/* Page Content */}
          {children}

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
