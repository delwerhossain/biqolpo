import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";

export const fraunces = Fraunces({
  variable: "--f-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const geist = Geist({
  variable: "--f-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--f-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontVariables = [
  fraunces.variable,
  geist.variable,
  jetbrainsMono.variable,
].join(" ");
