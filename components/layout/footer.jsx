// SPDX-License-Identifier: MIT

// styles
import styles from "./footer.module.scss";
// config
import PACKAGE from "../../package";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
