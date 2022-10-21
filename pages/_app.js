import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import Header from "../components/Header";
import "../styles/globals.css";
// import styles from "../styles/Cards.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Header />
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
