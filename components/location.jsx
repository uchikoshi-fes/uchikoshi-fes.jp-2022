// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
import { GoogleMaps } from "@/components/layout/outline";
// styles
import styles from "./location.module.scss";
// icons
import { faRoute, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <article className={styles.location}>
      <h2>会場：浅野学園</h2>
      <div className={styles["google-maps-container"]}>
        <GoogleMaps scale="60" />
      </div>
      <article>
        <h3>アクセス</h3>
        <p>
          JR 新子安・京急新子安より徒歩 8 分
          <br />
          <Link href="https://www.google.co.jp/maps/dir//%E3%80%92221-0012+%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%8C%BA%E5%AD%90%E5%AE%89%E5%8F%B0%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%91+%E6%B5%85%E9%87%8E%E4%B8%AD%E5%AD%A6%E6%A0%A1%E3%83%BB%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1/">
            <FontAwesomeIcon icon={faRoute} className={styles.icon} />
            現在地からのルート
          </Link>
        </p>
      </article>
      <article>
        <h3>事前予約</h3>
        <p>
          文化祭に来場する際は、事前に予約が必要です。
          <br />
          予約は抽選で受け付けております。
          <br />
          予約に関しては、以下のページをご覧ください。
        </p>
        <Link href="/reserve" className={styles["reserve-link"]}>
          事前予約ページ
          <FontAwesomeIcon icon={faAnglesRight} className={styles.icon} />
        </Link>
      </article>
    </article>
  );
};

export default Location;
