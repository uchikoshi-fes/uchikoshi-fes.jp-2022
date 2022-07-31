// SPDX-License-Identifier: MIT

// components
import Link from "@/components/base/link";
// styles
import styles from "./footer.module.scss";
// config
import PACKAGE from "@/package";

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
    <footer className={styles.footer}>
      <Sns />
      <Others />
    </footer>
  );
};

export default Footer;
