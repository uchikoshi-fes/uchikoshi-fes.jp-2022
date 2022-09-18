// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// hooks
import useClient from "@/hooks/client";
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
// images
import souichiroImage from "@/public/souichiro.jpeg";
import sloganImage from "@/public/slogan.svg";

const Top = () => {
  return (
    <div className={styles.top}>
      <Image src={souichiroImage} layout="fill" objectFit="cover" alt="" />
      <div className={styles["slogan-wrap"]}>
        <Image src={sloganImage} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={styles.scrolldown}>
        <span>Scroll</span>
      </div>
    </div>
  );
};

const Index = () => {
  const isClient = useClient();
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [isClient]);

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
      {now < Date.UTC(2022, 8, 12, 12, 0) - 9 * 3600000 && (
        <div className={styles["reserve-container"]}>
          <Reserve />
        </div>
      )}
      <div className={styles["pv-container"]}>
        <PromotionVideos />
      </div>
    </div>
  );
};

export default Index;
