import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i"
          type="text/css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
