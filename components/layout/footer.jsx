// SPDX-License-Identifier: MIT

// components
import { Timeline as TwitterTL } from "react-twitter-widgets";
import Link from "@/components/base/link";
// styles
import styles from "./footer.module.scss";
// config
import PACKAGE from "@/package";
import { links as menuLinks } from "@/components/layout/menu";

const Tweets = ({ tweetLimit }) => {
  return (
    <article className={styles["tweets"]}>
      <h2>公式 Twitter の最新ツイート</h2>
      <div className={styles["twitter-tl"]}>
        <TwitterTL
          dataSource={{ sourceType: "profile", screenName: "uchikoshifes" }}
          options={{ tweetLimit }}
        />
      </div>
    </article>
  );
};

const Sns = () => {
  return (
    <div className={styles.sns}>
      {/*<div>TODO: LINE のボタン</div>*/}
      <div>
        <Link
          href="https://twitter.com/uchikoshifes?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-size="large"
          data-lang="ja"
          data-show-count="false"
        >
          @uchikoshifesさんをフォロー
        </Link>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
      {/*<div>TODO: Instagram のボタン</div>*/}
      {/*<div>TODO: YouTube のボタン</div>*/}
    </div>
  );
};

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles["menu-title"]}>目次</h2>
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
    <div className={styles.others}>
      <Link href="/contact">お問い合わせ</Link>
      <Link href="/privacy">プライバシーポリシー</Link>
      <Link href="/licenses">ライセンス</Link>
      <Link href="https://www.asano.ed.jp/">浅野学園公式サイトはこちら</Link>
      <small>v{PACKAGE.version}</small>
      <small>Copyright &copy; 2022 浅野学園生徒会</small>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <Tweets />
      <footer className={styles.footer}>
        <Sns />
        <Menu />
        <Others />
      </footer>
    </>
  );
};

export default Footer;
