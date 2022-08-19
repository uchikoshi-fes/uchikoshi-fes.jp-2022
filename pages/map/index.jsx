// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./index.module.scss";

const SchoolMap = () => {
  return (
    <>
      <NextSeo title="校内マップ" openGraph={{ title: "校内マップ" }} />
      <article className={styles.map}>
        <h1>校内マップ</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default SchoolMap;
