// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import NextSeo from "next-seo";
import ReactPlayer from "react-player";
import Image from "@/components/base/image";
import Slogan from "@/components/top/slogan";
import Access from "@/components/top/access";
import Reserve from "@/components/top/reserve";
import Countdown from "@/components/top/countdown";
import PromotionVideos from "@/components/top/promotion-videos";
// styles
import styles from "./index.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles["slogan-wrap"]}>
        <div className={styles.slogan} />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className={styles.index}>
      <div className={styles["top-container"]}>
        <Top />
      </div>
      <div className={styles["slogan-container"]}>
        <Slogan />
      </div>
      <div className={styles["countdown-container"]}>
        <Countdown />
      </div>
      <div className={styles["access-container"]}>
        <Access />
      </div>
      <div className={styles["reserve-container"]}>
        <Reserve />
      </div>
      <div className={styles["pv-container"]}>
        <PromotionVideos />
      </div>
    </div>
  );
};

export default Index;
