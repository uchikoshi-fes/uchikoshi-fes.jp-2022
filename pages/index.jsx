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
        <div>
          <Image
            src="/souichiro.jpeg"
            alt=""
            layout="fill"
            className={styles["top-image"]}
          />
        </div>
        <div className={styles["top-text"]}>
          <div>
            <h1 className={styles.title}>
              第43回
              <wbr />
              打越祭
              <wbr />
              公式サイト
            </h1>
            <p className={styles.description}>
              浅野学園2022年度文化祭
              <br />
              鋭意制作中！
            </p>
          </div>
        </div>
      </div>
      <div className={styles["countdown-container"]}>
        <Countdown />
      </div>
    </>
  );
};

export default Index;
