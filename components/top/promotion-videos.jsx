// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import { InView } from "react-intersection-observer";
import ReactPlayer from "react-player";
// styles
import styles from "./promotion-videos.module.scss";

const PV_ALL = [
  {
    name: "第２弾",
    url: "https://youtu.be/QW1T18FOJfA",
  },
  {
    name: "第１弾",
    url: "https://youtu.be/To5jTMIBWeA",
  },
];

const PromotionVideos = () => {
  const [pvTabName, setPvTabName] = React.useState(PV_ALL[0].name);

  return (
    <section className={styles["promotion-videos"]}>
      <h2 className={styles["pv-title"]}>プロモーションビデオ</h2>
      <div className={styles["pv-window"]}>
        <ul className={styles["pv-tabs"]}>
          {PV_ALL.map(({ name }) => (
            <li
              className={
                name === pvTabName
                  ? styles["pv-tab-active"]
                  : styles["pv-tab-inactive"]
              }
              key={name}
            >
              <button onClick={() => setPvTabName(name)}>{name}</button>
            </li>
          ))}
        </ul>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div className={styles["pv-content"]} ref={ref}>
              {inView && (
                <ReactPlayer
                  url={PV_ALL.find(({ name }) => name === pvTabName).url}
                  width="100%"
                  height="100%"
                  controls
                  wrapper={React.Fragment}
                />
              )}
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};

export { PV_ALL };
export default PromotionVideos;
