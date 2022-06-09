// SPDX-License-Identifier: MIT

// styles
import styles from "./footer.module.scss";
// config
import PACKAGE from "../../package";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        {/*<span>TODO: LINE のボタン</span>*/}
        <span>
          <a
            href="https://twitter.com/uchikoshifes?ref_src=twsrc%5Etfw"
            rel="noreferrer noopener"
            target="_blank"
            className="twitter-follow-button"
            data-show-count="false"
          >
            @uchikoshifesさんをフォロー
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </span>
        {/*<span>TODO: Instagram のボタン</span>*/}
        {/*<span>TODO: YouTube のボタン</span>*/}
      </div>
      <div>
        {/*<span>お問い合わせ</span>*/}
        {/*<span>プライバシー</span>*/}
        {/*<span>ライセンス</span>*/}
        <span>
          <a
            href="https://www.asano.ed.jp/"
            rel="noreferrer noopener"
            target="_blank"
          >
            浅野学園公式サイトはこちら
          </a>
        </span>
        <small>v{PACKAGE.version}</small>
        <small>Copyright &copy; 2022 浅野学園生徒会</small>
      </div>
    </footer>
  );
};

export default Footer;
