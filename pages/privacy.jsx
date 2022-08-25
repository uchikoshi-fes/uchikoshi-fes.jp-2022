// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./privacy.module.scss";

const Privacy = () => {
  return (
    <>
      <NextSeo
        title="プライバシーポリシー"
        openGraph={{ title: "プライバシーポリシー" }}
      />
      <article className={styles.privacy}>
        <h1>
          プライバシー
          <wbr />
          ポリシー
        </h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Privacy;
