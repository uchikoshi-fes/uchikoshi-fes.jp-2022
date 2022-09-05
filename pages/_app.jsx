// SPDX-License-Identifier: MIT

// react
import React from "react";
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
// others
import { resetScroll } from "@/components/base/link";

// why: https://fontawesome.com/docs/web/use-with/react/use-with
config.autoAddCss = false;

const UchikoshiFesApp = ({ Component, pageProps }) => {
  const router = useRouter();
  React.useEffect(() => {
    document.body.classList.remove("fixed");
    router.events.on("routeChangeComplete", resetScroll);
    return () => router.events.off("routeChangeComplete", resetScroll);
  }, []);

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
