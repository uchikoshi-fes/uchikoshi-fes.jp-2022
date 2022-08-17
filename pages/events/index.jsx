// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./index.module.scss";

const Events = () => {
  return (
    <>
      <NextSeo title="イベント一覧" openGraph={{ title: "イベント" }} />
      <article className={styles.events}>
        <h1>イベント一覧</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Events;
