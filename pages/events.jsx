// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./events.module.scss";
// images
import hallImage from "@/public/events/hall.png";
import arenaImage from "@/public/events/arena.png";
import fieldImage from "@/public/events/field.png";

const getHeight = (src, width) => {
  return (src.height / src.width) * width;
};

const imageWidth = 400;

const Events = () => {
  return (
    <>
      <NextSeo title="イベント一覧" openGraph={{ title: "イベント" }} />
      <article className={styles["events-wrap"]}>
        <h1>イベント一覧</h1>
        <div className={styles.events}>
          <section>
            <h2>
              <Link href="/map/jhs-f2">講堂</Link>
            </h2>
            <Image
              src={hallImage}
              alt="メロンフラッペ、ディベート、ジャグリング、劇団こぎと"
              width={imageWidth}
              height={getHeight(hallImage, imageWidth)}
            />
          </section>
          <section>
            <h2>
              <Link href="/map/arena">アリーナ</Link>
            </h2>
            <Image
              src={arenaImage}
              alt="豪華イベント勢揃い！"
              width={imageWidth}
              height={getHeight(arenaImage, imageWidth)}
            />
          </section>
          <section>
            <h2>
              <Link href="/map/field">グラウンド</Link>
            </h2>
            <Image
              src={fieldImage}
              alt="野球、サッカー、地学部ロケット、アメフト"
              width={imageWidth}
              height={getHeight(fieldImage, imageWidth)}
            />
          </section>
        </div>
      </article>
    </>
  );
};

export default Events;
