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
    name: "第１弾",
    url: "https://youtu.be/To5jTMIBWeA",
  },
];

const PromotionVideos = () => {
  const [pvTabName, setPvTabName] = React.useState(PV_ALL[0].name);

  return (
    <article className={styles["promotion-videos"]}>
      <h2>プロモーションビデオ</h2>
      <div className={styles["pv-window"]}>
        <ul className={styles["pv-tabs"]}>
          {PV_ALL.map(({ name }) => (
            <li
              className={name === pvTabName ? styles["pv-tab-active"] : ""}
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
    </article>
  );
};

export { PV_ALL };
export default PromotionVideos;
