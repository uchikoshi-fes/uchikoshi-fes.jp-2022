// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./sponsors.module.scss";

const Sponsors = () => {
  return (
    <>
      <NextSeo title="スポンサー" openGraph={{ title: "スポンサー" }} />
      <article className={styles.sponsors}>
        <h1>スポンサー</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Sponsors;
