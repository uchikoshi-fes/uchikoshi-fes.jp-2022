// SPDX-License-Identifier: MIT

// components
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Timeline as TwitterTL } from "react-twitter-widgets";
import Link from "@/components/base/link";
import Outline from "./outline";
// styles
import styles from "./footer.module.scss";
// icons
import {
  faLine,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// config
import PACKAGE from "@/package";
import { links as menuLinks } from "@/components/layout/menu";

const Tweets = ({ tweetLimit }) => {
  return (
    <section className={styles["tweets"]}>
      <h2 className={styles["tweets-title"]}>公式 Twitter</h2>
      <InView triggerOnce rootMargin="200px">
        {({ inView, ref }) => (
          <div className={styles["twitter-tl"]} ref={ref}>
            {inView && (
              <TwitterTL
                dataSource={{
                  sourceType: "profile",
                  screenName: "uchikoshifes",
                }}
                options={{ tweetLimit }}
              />
            )}
          </div>
        )}
      </InView>
    </section>
  );
};

const Sns = () => {
  return (
    <div className={styles.sns}>
      <div className={styles["sns-line"]}>
        <Link href="https://line.me/R/ti/p/@136ffgbc" noIcon>
          <span className={styles["sns-icon"]}>
            <FontAwesomeIcon icon={faLine} />
          </span>
          公式 LINE を友だち追加
        </Link>
      </div>
      <div className={styles["sns-youtube"]}>
        <Link href="https://youtube.com/c/uchikoshi-fes" noIcon>
          <span className={styles["sns-icon"]}>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          公式 YouTube をチャンネル登録
        </Link>
      </div>
      <div className={styles["sns-twitter"]}>
        <Link href="https://twitter.com/uchikoshifes" noIcon>
          <span className={styles["sns-icon"]}>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          公式 Twitter をフォロー
        </Link>
      </div>
      <div className={styles["sns-instagram"]}>
        <Link href="https://instagram.com/uchikoshifes" noIcon>
          <span className={styles["sns-icon"]}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          公式 Instagram をフォロー
        </Link>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles["menu-title"]}>Links</h2>
      <ul className={styles["menu-links"]}>
        {menuLinks.map(({ href, name }) => (
          <li key={href}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Others = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles["menu-title"]}>Others</h2>
      <ul className={styles["menu-links"]}>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
        <li>
          <Link href="/privacy">プライバシーポリシー</Link>
        </li>
        <li>
          <Link href="/licenses">ライセンス</Link>
        </li>
        <li>
          <Link href="https://www.asano.ed.jp/">
            浅野学園公式サイトはこちら
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      v{PACKAGE.version} &copy; 2022 浅野学園生徒会
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <Tweets tweetLimit={5} />
      <Outline />
      <footer className={styles.footer}>
        <Menu />
        <Others />
        <Sns />
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
