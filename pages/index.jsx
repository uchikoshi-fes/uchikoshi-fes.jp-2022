/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

import Head from "next/head";
import styles from "../styles/Index.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>第43回打越祭公式サイト (浅野学園2022年度文化祭)</title>
        <meta name="description" content="ここって何書けばいいと思う？" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} non-break`}>
          第43回
          <wbr />
          打越祭
          <wbr />
          公式サイト
        </h1>

        <p className={styles.description}>
          浅野学園 2022 年度文化祭
          <br />
          誠意制作中！
        </p>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; 2022 uchikoshi-fes
      </footer>
    </div>
  );
};
