// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./index.module.scss";

const Articles = () => {
  return (
    <>
      <NextSeo title="記事一覧" openGraph={{ title: "記事" }} />
      <article className={styles.articles}>
        <h1>記事一覧</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Articles;
