import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambrose Pizza & Wings | Pizza, Wings & More on the Reserve",
  description:
    "Ambrose Pizza & Wings serves authentic New York-style pizza, saucy wings, Indian fried tacos, burgers, and more. Order pickup online.",
  keywords: [
    "pizza on the reserve",
    "Six Nations pizza",
    "Ambrose pizza",
    "wings",
    "Indian fried tacos",
    "Southwold Ontario",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Ambrose Pizza & Wings",
    description:
      "Bold flavours and a diverse menu on the reserve. NY-style pizza, wings, tacos, burgers and more.",
    url: "https://ambrosepizza.ca",
    siteName: "Ambrose Pizza & Wings",
    locale: "en_CA",
    type: "website",
  },
};

function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ambrose Pizza & Wings",
    url: "https://ambrosepizza.ca",
    servesCuisine: ["Pizza", "Wings", "Tacos", "Burgers"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    menu: "https://ambrosepizza.ca/#menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="bg-neutral-950 font-sans antialiased">
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}