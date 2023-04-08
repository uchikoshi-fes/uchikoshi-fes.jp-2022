// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// hooks
import { useRouter } from "next/router";
// components
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./rize.module.scss";

const Rize = () => {
  const router = useRouter();
  const [token, setToken] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [congestions, setCongestions] = React.useState(null);
  React.useEffect(() => {
    if (!router.isReady || token === null) return;
    setToken(router.query.token ?? "");
    router.replace({ query: {} }, undefined, { shallow: true });
    // TODO: fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <NextSeo
        title="RIZE 管理ページ"
        openGraph={{ title: "RIZE 管理ページ" }}
      />
      <article className={styles.rize}>
        <h1>RIZE 管理ページ</h1>
        {token === "" && (
          <p>
            このページは RIZE の管理ページです。<></>
            一般の方は <Link href="/">トップページ</Link> へお戻りください。
            モデレーターの方は、LINE BOT からのメッセージに<></>
            記載されているトークン付きのリンクからアクセスしてください。
          </p>
        )}
      </article>
    </>
  );
};

export default Rize;
