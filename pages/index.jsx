// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import NextSeo from "next-seo";
import ReactPlayer from "react-player";
import Image from "@/components/base/image";
import Slogan from "@/components/slogan";
import Location from "@/components/location";
import Countdown from "@/components/countdown";
import PromotionVideos from "@/components/promotion-videos";
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
    <>
      <div className={styles["top-container"]}>
        <Top />
      </div>
      <div className={styles["slogan-container"]}>
        <Slogan />
      </div>
      <div className={styles["location-container"]}>
        <Location />
      </div>
      <div className={styles["countdown-container"]}>
        <Countdown />
      </div>
      <div className={styles["pv-container"]}>
        <PromotionVideos />
      </div>
    </>
  );
};

export default Index;
