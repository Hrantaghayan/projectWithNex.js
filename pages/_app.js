import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/authModal.scss";
import { RootLayout } from "@/compoenents";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "../styles/Todomodal.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TO DO</title>
        <meta
          name="Simple todo app for learning next.js 13"
          content="Learning to do"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        Scri
      </Head>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </SessionProvider>
      </Provider>
    </>
  );
}
