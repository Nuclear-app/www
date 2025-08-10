import type { Metadata } from "next";
import { Epilogue, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuclear. Learn Better.",
  description: "Learn better and smarter with Nuclear. Upload any file. Create flashcards and quizzes.",
  icons: {
    icon: '/nuclear.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload university SVG files for better performance */}
        <link rel="preload" href="/unis/mcgill.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/umich.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/nus.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/uoft.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/ntu.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/edinburgh.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/waterloo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/umass.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/unis/iu.svg" as="image" type="image/svg+xml" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H0KRK6CNT7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H0KRK6CNT7');
            `,
          }}
        />

        {/* Rybbit Analytics */}
        <script src="https://app.rybbit.io/api/script.js" data-site-id="1967" defer></script>
      </head>
      <body
        className={`${epilogue.variable} ${ebGaramond.variable} antialiased`}
      >
                {/* <div className="noise" /> */}

        {children}
      </body>

    </html>
  );
}
