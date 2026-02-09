import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { JEP3Navigation } from "@/components/navigation/jep3-navigation";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JE-P3 - Jaringan Ekosistem Pengusaha Persatuan Pembangunan | Desa Digital Go Global",
  description: "Super-Ekosistem Pengusaha Multinasional Terbesar di Dunia yang Lahir dari Desa, Dibangun oleh Rakyat, dan Menguasai Pasar Global. Menghubungkan 83.763 Desa Indonesia dengan 195 Negara.",
  keywords: ["JE-P3", "Jaringan Ekosistem Pengusaha Persatuan Pembangunan", "Pengusaha Desa", "Ekosistem Digital", "Marketplace Pertanian", "Fintech Pertanian", "Ekspor Produk Desa", "Blockchain Agriculture", "Desa Digital", "Go Global", "pppdigital.id", "pppbisnis.com"],
  authors: [{ name: "JE-P3 Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "JE-P3 - Super-Ekosistem Pengusaha Desa Indonesia",
    description: "Dari Desa Untuk Dunia - Menghubungkan 83.763 desa dengan 195 negara melalui infrastruktur digital, blockchain, AI, dan kearifan lokal.",
    url: "https://pppbisnis.com",
    siteName: "JE-P3",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JE-P3 - Desa Digital Go Global",
    description: "Super-Ekosistem Pengusaha Multinasional Terbesar di Dunia yang Lahir dari Desa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <JEP3Navigation />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}


