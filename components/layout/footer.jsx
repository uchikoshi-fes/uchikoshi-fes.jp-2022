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
            charset="utf-8"
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
            浅野学園公式サイト
          </a>
        </span>
        <span>
          <a
            href="https://maps.app.goo.gl/oHHMCEr89Cpeu6XEA"
            rel="noreferrer noopener"
            target="_blank"
          >
            神奈川県横浜市神奈川区子安台1丁目3-1
          </a>
        </span>
        <span>
          v{PACKAGE.version}{" "}
          <a
            href="https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022"
            rel="noreferrer noopener"
            target="_blank"
          >
            サイトの中身
          </a>
        </span>
        <small>Copyright &copy; 2022 浅野学園生徒会</small>
      </div>
    </footer>
  );
};

export default Footer;
