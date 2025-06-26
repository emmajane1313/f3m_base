import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://emmajanemackinnonlee-f3manifesto.com";

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      <url>
        <loc>${baseUrl}/</loc>
       
      <image:image>
          <image:loc>${baseUrl}/images/f3m.png</image:loc>
          <image:title><![CDATA[F3Manifesto | Emma-Jane MacKinnon-Lee]]></image:title>
          <image:caption><![CDATA[F3Manifesto | Emma-Jane MacKinnon-Lee]]></image:caption>
        </image:image>
      </url>


        
    

    </urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
