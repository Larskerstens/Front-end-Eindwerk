import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import "../css/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
