import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import "../../public/font/index.css";

import ThemeConfig from "src/theme";
import GlobalStyles from "src/theme/globalStyles";

import { UIProvider } from "src/contexts/UIContext";

import { ContractProvider } from "src/contexts/ContractContext";
import { createEmotionCache } from "src/theme/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ContractProvider>
      <CacheProvider value={emotionCache}>
        <ThemeConfig>
          <UIProvider>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </UIProvider>
        </ThemeConfig>
      </CacheProvider>
    </ContractProvider>
  );
}
