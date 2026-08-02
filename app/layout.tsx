import type { Metadata, Viewport } from "next";
import { Archivo, Barlow_Condensed } from "next/font/google";
import { site } from "@/lib/site-data";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kronus Archive — Dawn of War IV Field Guide",
    template: "%s | Kronus Archive",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  applicationName: site.name,
  keywords: [
    "Dawn of War IV",
    "Dawn of War 4 guide",
    "Dawn of War IV factions",
    "Warhammer 40,000 RTS",
    "Dawn of War IV release date",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Kronus Archive — Dawn of War IV Field Guide",
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kronus Archive — Dawn of War IV Field Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kronus Archive — Dawn of War IV Field Guide",
    description: site.description,
    images: ["/og.png"],
  },
  authors: [{ name: "Kronus Archive Editorial Desk" }],
  creator: "Kronus Archive Editorial Desk",
  publisher: "Kronus Archive",
};

export const viewport: Viewport = {
  themeColor: "#111310",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
