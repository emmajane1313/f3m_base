import type { Metadata } from "next";
import HomeClient from "@/modules/HomeClient";

export const metadata: Metadata = {
  title: "F3Manifesto & The Machines | Emma-Jane MacKinnon-Lee",
  description: "100% CC0, 100% On-Chain. I WANT MY WEB3 FASHION. Cotton warp, varieties of weft, shuttles, tapestry needle, comb, shed. Stacking looks and skills, sewing together more useful stuff by Emma-Jane MacKinnon-Lee. Est. 2021.",
  metadataBase: new URL("https://emmajanemackinnonlee-f3manifesto.com/"),
  openGraph: {
    title: "F3Manifesto & The Machines | Emma-Jane MacKinnon-Lee",
    description: "100% CC0, 100% On-Chain. I WANT MY WEB3 FASHION. Made from the fabric stuff of Web3 by Emma-Jane MacKinnon-Lee.",
    url: "https://emmajanemackinnonlee-f3manifesto.com/",
    siteName: "F3Manifesto & The Machines",
    images: [
      {
        url: "/images/f3m.png",
        width: 1200,
        height: 630,
        alt: "F3Manifesto & The Machines by Emma-Jane MacKinnon-Lee - Web3 Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "F3Manifesto & The Machines | Emma-Jane MacKinnon-Lee",
    description: "100% CC0, 100% On-Chain. I WANT MY WEB3 FASHION by Emma-Jane MacKinnon-Lee.",
    images: ["/images/f3m.png"],
  },
  authors: [{ name: "Emma-Jane MacKinnon-Lee", url: "https://emmajanemackinnonlee.com/" }],
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Emma-Jane MacKinnon-Lee",
    "F3Manifesto",
    "Web3 Fashion",
    "CC0",
    "On-Chain Fashion",
    "DIGITALAX",
    "Open Source Fashion",
    "Web3",
    "I Coined Web3 Fashion",
  ],
  alternates: {
    canonical: "https://emmajanemackinnonlee-f3manifesto.com/",
  },
};

export default function Home() {
  return <HomeClient />;
}
