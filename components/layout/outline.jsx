// SPDX-License-Identifier: MIT

// components
import { InView } from "react-intersection-observer";
// styles
import styles from "./outline.module.scss";

/**
 * 浅野の Google Maps 埋め込みのコンポーネント
 * 画面内に入ったら読み込まれます。
 * @param {{ scale: string | number }} デフォルトの縮尺
 * @returns {JSX.Element} Google Maps コンポーネント
 */
const GoogleMaps = ({ scale = "13.1" }) => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <article className={styles.map} ref={ref}>
          {inView && (
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6497.057482057193!2d139.658201!3d35.491202!3m2!1i1024!2i768!4f${scale}!3m3!1m2!1s0x60185dd0cec4b9f1%3A0x61ef37511aa6ddb0!2z5rWF6YeO5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1654689474523!5m2!1sja!2sjp`}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </article>
      )}
    </InView>
  );
};

const Outline = () => {
  return (
    <section className={styles.outline}>
      <h1 className={styles["outline-title"]}>開催概要</h1>
      <div className={styles["outline-content"]}>
        <h3 className={styles["outline-subtitle"]}>日程</h3>
        <p>9月18日 (日) 19日 (月)</p>
        <p>雨天決行</p>
      </div>
      <div className={styles["outline-content"]}>
        <h3 className={styles["outline-subtitle"]}>会場</h3>
        <p>浅野中学校・高等学校</p>
        <p>〒221-0012 神奈川県横浜市神奈川区子安台１丁目３-１</p>
        <div className={styles["map-container"]}>
          <GoogleMaps scale="60" />
        </div>
      </div>
    </section>
  );
};

export { GoogleMaps };
export default Outline;
