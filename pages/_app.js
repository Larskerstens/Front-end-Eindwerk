import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import "../css/style.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Box id='fullpage'>
            <Component {...pageProps} />
          </Box>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
