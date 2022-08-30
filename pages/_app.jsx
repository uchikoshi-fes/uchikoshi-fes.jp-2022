// SPDX-License-Identifier: MIT

// hooks
import { useEffect } from "react";
import { useRouter } from "next/router";
// components
import { DefaultSeo } from "next-seo";
import Layout from "@/components/layout/layout";
// styles
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./global.scss";
// config
import { config } from "@fortawesome/fontawesome-svg-core";
import SEO from "@/next-seo.config";

// why: https://fontawesome.com/docs/web/use-with/react/use-with
config.autoAddCss = false;

const UchikoshiFesApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove("fixed");
  });

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
