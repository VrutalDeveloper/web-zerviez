import type { AppProps } from "next/app";
import { FC } from "react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { createEmotionCache, theme } from "../mui";

const clientSideEmotionCache = createEmotionCache();

interface EmotionAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<EmotionAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ZErviEZ</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
