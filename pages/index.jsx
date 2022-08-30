// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import NextSeo from "next-seo";
import Image from "@/components/base/image";
import Countdown from "@/components/countdown";
// styles
import styles from "./index.module.scss";

const Index = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles["slogan-wrap"]}>
          <div className={styles.slogan} />
        </div>
      </div>
      <div className={styles["countdown-container"]}>
        <Countdown />
      </div>
    </>
  );
};

export default Index;
