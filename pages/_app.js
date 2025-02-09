import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TrustMarkett - Custom Painted Keychains</title>
        <meta
          name="description"
          content="Explore TrustMarkett for unique, custom-painted keychains. Available for shipping or pickup in Toronto."
        />
        <meta
          name="keywords"
          content="custom keychains, hand-painted keychains, TrustMarkett, Toronto services"
        />
        <meta name="author" content="TrustMarkett" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags for SEO and Social Sharing */}
        <meta
          property="og:title"
          content="TrustMarkett - Custom Painted Keychains"
        />
        <meta
          property="og:description"
          content="Explore TrustMarkett for unique, custom-painted keychains. Available for shipping or pickup in Toronto."
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/1.jpg"
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/2.jpg"
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/3.jpg"
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/4.jpg"
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/5.jpg"
        />
        <meta
          property="og:image"
          content="https://trustmarkett.com/images/6.jpg"
        />
        <meta property="og:url" content="https://trustmarkett.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
