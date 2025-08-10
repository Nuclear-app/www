import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Nuclear. Learn Better.",
  description: "Choose the perfect Nuclear plan for your learning needs. Affordable pricing for students with powerful AI-driven study tools.",
  keywords: "nuclear pricing, student discount, learning app pricing, AI study tools cost",
  openGraph: {
    title: "Pricing - Nuclear. Learn Better.",
    description: "Choose the perfect Nuclear plan for your learning needs. Affordable pricing for students with powerful AI-driven study tools.",
    url: "https://nuclearapp.ca/pricing",
    siteName: "Nuclear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Nuclear. Learn Better.",
    description: "Choose the perfect Nuclear plan for your learning needs. Affordable pricing for students with powerful AI-driven study tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Google Analytics - Additional tracking for pricing page */}
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
        
        {/* Pricing page specific meta tags */}
        <meta name="pricing-page" content="true" />
        <link rel="canonical" href="https://nuclearapp.ca/pricing" />
      </head>
      {children}
    </>
  );
}
