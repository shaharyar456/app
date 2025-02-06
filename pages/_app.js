import "../styles/globals.css"; // Ensure global styles are loaded
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
