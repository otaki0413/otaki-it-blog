import "src/styles/globals.css";
import type { CustomAppPage } from "next/app";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <div className="mx-auto max-w-prose">
          <main className="mt-8">
            {getLayout(<Component {...pageProps} />)}
          </main>
        </div>
      </MantineProvider>
    </>
  );
};

export default App;
