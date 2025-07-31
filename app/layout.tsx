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
  title: "Nuclear - AI for Learning",
  description: "Transform your notes into interactive learning experiences with AI-powered tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${ebGaramond.variable} antialiased`}
      >
                {/* <div className="noise" /> */}

        {children}
      </body>

    </html>
  );
}
