import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
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
          <header className="border-b border-gray-300 py-8">
            <Link href="/">
              <a className="text-5xl font-bold">おたきのITブログ</a>
            </Link>
          </header>
          <main className="mt-8">
            <Component {...pageProps} />
          </main>
        </div>
      </MantineProvider>
    </>
  );
};

export default App;
