import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F3Manifesto & The Machines",
  description: "Made from the fabric stuff of Web3.",
  metadataBase: new URL("https://emmajanemackinnonlee-f3manifesto.com/"),
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "F3Manifesto & The Machines",
    description: "Made from the fabric stuff of Web3.",
  },
  openGraph: {
    title: "F3Manifesto & The Machines",
    description: "Made from the fabric stuff of Web3.",
    images: [
      {
        url: "/images/f3m.png",
        width: 1200,
        height: 630,
        alt: "F3Manifesto & The Machines by Emma-Jane MacKinnon-Lee",
      },
    ],
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee-f3manifesto.com/",
                "https://emmajanemackinnonlee-digitalax.com/",
                "https://icoinedweb3fashion.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "F3Manifesto & The Machines",
              description: "I WANT MY WEB3 FASHION. 100% CC0, 100% On-Chain. Made from the fabric stuff of Web3 by Emma-Jane MacKinnon-Lee.",
              thumbnailUrl: "https://emmajanemackinnonlee-f3manifesto.com/images/f3m.png",
              uploadDate: "2021-01-01T00:00:00Z",
              contentUrl: "https://emmajanemackinnonlee-f3manifesto.com/videos/f3m.mp4",
              embedUrl: "https://emmajanemackinnonlee-f3manifesto.com/",
              creator: {
                "@type": "Person",
                name: "Emma-Jane MacKinnon-Lee",
                url: "https://emmajanemackinnonlee.com/",
              },
              author: {
                "@type": "Person",
                name: "Emma-Jane MacKinnon-Lee",
                url: "https://emmajanemackinnonlee.com/",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
