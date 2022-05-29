// SPDX-License-Identifier: MIT

// next
import { useRouter } from "next/router";
// components
import { DefaultSeo } from "next-seo";
import Layout from "../components/layout/layout";
// styles
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";
import "../styles/globals.scss";
// config
import SEO from "../next-seo.config";

const UchikoshiFesApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <DefaultSeo {...SEO(router)} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default UchikoshiFesApp;
