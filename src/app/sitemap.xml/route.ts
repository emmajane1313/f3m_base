import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://emmajanemackinnonlee-f3manifesto.com";

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${baseUrl}/</loc>
        <lastmod>2021-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>

        <image:image>
          <image:loc>${baseUrl}/images/f3m.png</image:loc>
          <image:title><![CDATA[F3Manifesto & The Machines by Emma-Jane MacKinnon-Lee]]></image:title>
          <image:caption><![CDATA[Web3 Fashion - 100% CC0, 100% On-Chain by Emma-Jane MacKinnon-Lee]]></image:caption>
        </image:image>

        <video:video>
          <video:thumbnail_loc>${baseUrl}/images/f3m.png</video:thumbnail_loc>
          <video:title><![CDATA[F3Manifesto & The Machines | I WANT MY WEB3 FASHION]]></video:title>
          <video:description><![CDATA[100% CC0, 100% On-Chain Web3 Fashion by Emma-Jane MacKinnon-Lee. Made from the fabric stuff of Web3. Est. 2021.]]></video:description>
          <video:content_loc>${baseUrl}/videos/f3m.mp4</video:content_loc>
          <video:publication_date>2021-01-01T00:00:00Z</video:publication_date>
          <video:family_friendly>yes</video:family_friendly>
          <video:uploader info="https://emmajanemackinnonlee.com/">Emma-Jane MacKinnon-Lee</video:uploader>
        </video:video>
      </url>

    </urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
