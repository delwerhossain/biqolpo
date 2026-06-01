import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

const SITE_URL = "https://biqolpo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Biqolpo · The smarter alternative, found.",
    template: "%s · Biqolpo",
  },
  description:
    "Bangladesh-focused alternative discovery. Find cheaper, safer, local and free alternatives for everyday products, tools, foods and services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Biqolpo",
    url: SITE_URL,
    title: "Biqolpo · The smarter alternative, found.",
    description:
      "Find cheaper, safer, local and free alternatives — for Bangladesh.",
  },
  twitter: { card: "summary_large_image" },
  applicationName: "Biqolpo",
  icons: {
    icon: [{ url: "/biqolpo-icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="grain">{children}</body>
    </html>
  );
}
