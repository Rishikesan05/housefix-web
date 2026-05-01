import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "HOUSEFIX.LK — Design • Build • Renovate | Jaffna, Sri Lanka",
  description:
    "HOUSEFIX.LK (PVT) LTD is a professional construction, renovation, and home design company based in Jaffna, Sri Lanka. From blueprint to beautiful — we engineer smart living.",
  keywords:
    "house builders Jaffna, construction company Sri Lanka, home renovation Jaffna, house design Sri Lanka, smart home Sri Lanka, HOUSEFIX.LK",
  metadataBase: new URL("https://www.housefix.lk"),
  openGraph: {
    title: "HOUSEFIX.LK — Design • Build • Renovate",
    description:
      "Professional construction, renovation, and home design company in Jaffna, Sri Lanka. Building the future of smart living.",
    url: "https://www.housefix.lk",
    siteName: "HOUSEFIX.LK",
    type: "website",
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOUSEFIX.LK — Design • Build • Renovate",
    description:
      "Professional construction, renovation, and home design company in Jaffna, Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#080F1A" />
      </head>
      <body>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}
