import Head from "next/head";

export default function CustomHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="Punchbowl Pressure Washing" />
      <meta property="og:url" content="https://punchbowlpw.com" />
      <meta property="og:image" content="/og-image.png" />
    </Head>
  );
}
