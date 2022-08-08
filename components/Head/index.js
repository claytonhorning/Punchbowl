import Head from "next/head";
import Script from "next/script";

export default function CustomHead({ title }) {
  return (
    <Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y83HSTY35R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y83HSTY35R');
        `}
      </Script>
      <title>{title}</title>
      <meta property="og:title" content="Punchbowl Pressure Washing" />
      <meta property="og:url" content="https://punchbowlpw.com" />
      <meta property="og:image" content="/og-image.png" />
    </Head>
  );
}
