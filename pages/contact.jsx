// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
// styles
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <>
      <NextSeo title="お問い合わせ" openGraph={{ title: "お問い合わせ" }} />
      <article className={styles.contact}>
        <h1>お問い合わせ</h1>
        <p>
          このページは準備中です。
          <br />
          バージョンアップをお待ちください。
        </p>
      </article>
    </>
  );
};

export default Contact;
