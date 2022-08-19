// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./index.module.scss";

const Organizations = () => {
  return (
    <>
      <NextSeo title="団体一覧" openGraph={{ title: "団体一覧" }} />
      <article className={styles.orgs}>
        <h1>団体一覧</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Organizations;
