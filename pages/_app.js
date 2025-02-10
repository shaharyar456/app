import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  const getSEOContent = () => {
    if (router.pathname === "/") {
      return {
        title:
          "TrustMarket - Discover Local Services and Small Businesses in Toronto",
        description:
          "Explore TrustMarket for local services, small businesses, and unique opportunities in Toronto, Ontario. Connect with local providers and support small businesses.",
        keywords:
          "local services, small businesses, Toronto, Ontario, local business directory, community services",
        image: "https://trustmarket.ca/images/trustmarket-home.jpg",
      };
    } else if (router.pathname === "/liltkeys") {
      return {
        title: "TrustMarket - Custom Painted Keychains in Toronto and Ontario",
        description:
          "Discover LiltKeys for custom painted keychains. Hand-painted art available in Toronto, Brampton, Mississauga, and Ontario.",
        keywords:
          "custom painted keychains, hand-painted keychains, Toronto, Brampton, Mississauga, Ontario, art, painting, unique gifts",
        image: "https://trustmarket.ca/images/liltkeys-art.jpg",
      };
    } else {
      return {
        title: "TrustMarket",
        description:
          "Explore TrustMarket for unique services and businesses in your area.",
        keywords:
          "TrustMarket, local businesses, unique services, community directory",
        image: "https://trustmarket.ca/images/default.jpg",
      };
    }
  };

  const seoContent = getSEOContent();

  return (
    <>
      <Head>
        <title>{seoContent.title}</title>
        <meta name="description" content={seoContent.description} />
        <meta name="keywords" content={seoContent.keywords} />
        <meta name="author" content="TrustMarket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags for SEO and Social Sharing */}
        <meta property="og:title" content={seoContent.title} />
        <meta property="og:description" content={seoContent.description} />
        <meta property="og:image" content={seoContent.image} />
        <meta
          property="og:url"
          content="https://trustmarket.ca{router.pathname}"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
