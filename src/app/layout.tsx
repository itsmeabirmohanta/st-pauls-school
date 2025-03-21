import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My School",
  description: "Welcome to My School - Nurturing Future Leaders",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
