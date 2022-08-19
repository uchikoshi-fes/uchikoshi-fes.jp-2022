// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./licenses.module.scss";

const Licenses = () => {
  return (
    <>
      <NextSeo title="ライセンス" openGraph={{ title: "ライセンス" }} />
      <article className={styles.licenses}>
        <h1>ライセンス</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Licenses;
