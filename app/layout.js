import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Gavelo - Wyszukiwarka prawnicza AI | Legal Search Engine",
  description:
    "Gavelo to kontekstowa wyszukiwarka orzeczeń sądowych oparta na sztucznej inteligencji. Skróć czas researchu prawniczego o 75% dzięki zaawansowanemu AI i semantycznemu wyszukiwaniu.",
  keywords:
    "wyszukiwarka prawnicza, AI legal, orzeczenia sądowe, LegalTech, sztuczna inteligencja, prawo, research prawniczy, kontekstowe wyszukiwanie, automatyczne streszczenia wyroków",
  authors: [{ name: "Gavelo Team" }],
  creator: "Gavelo",
  publisher: "Gavelo",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#01161e",
  openGraph: {
    title: "Gavelo - Wyszukiwarka prawnicza AI",
    description:
      "Kontekstowa wyszukiwarka orzeczeń sądowych oparta na sztucznej inteligencji. Skróć czas researchu o 75%.",
    url: "https://gavelo.pl",
    siteName: "Gavelo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gavelo - Legal Search Engine AI",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavelo - Wyszukiwarka prawnicza AI",
    description: "Kontekstowa wyszukiwarka orzeczeń sądowych oparta na sztucznej inteligencji.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Gavelo",
              description: "Kontekstowa wyszukiwarka orzeczeń sądowych oparta na sztucznej inteligencji",
              url: "https://gavelo.pl",
              applicationCategory: "LegalTech",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PLN",
              },
              creator: {
                "@type": "Organization",
                name: "Gavelo Team",
                url: "https://gavelo.pl",
              },
              featureList: [
                "Kontekstowe wyszukiwanie AI",
                "Automatyczne streszczenia wyroków",
                "Semantyczne wyszukiwanie orzeczeń",
                "75% oszczędności czasu researchu",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#01161e" }}
      >
        {children}
      </body>
    </html>
  )
}
