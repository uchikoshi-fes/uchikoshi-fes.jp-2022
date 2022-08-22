// SPDX-License-Identifier: MIT

// components
import Link from "@/components/base/link";
// styles
import styles from "./footer.module.scss";
// config
import PACKAGE from "@/package";
import { links as menuLinks } from "@/components/layout/menu";

const Sns = () => {
  return (
    <div className={styles.sns}>
      <div className={styles["sns-line"]}>
        <Link href="https://lin.ee/fKKlJHd">公式 LINE を友だち追加</Link>
      </div>
      <div className={styles["sns-youtube"]}>
        <Link href="https://youtube.com/channel/UCIfMXvUdm7UiFLBmV8ZmQcA">
          公式 Youtube をチャンネル登録
        </Link>
      </div>
      <div className={styles["sns-twitter"]}>
        <Link href="https://twitter.com/uchikoshifes">
          公式 Twitter をフォロー
        </Link>
      </div>
      <div className={styles["sns-instagram"]}>
        <Link href="https://instagram.com/uchikoshifes">
          公式 Instagram をフォロー
        </Link>
      </div>
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
    <footer className={styles.footer}>
      <Sns />
      <Menu />
      <Others />
    </footer>
  );
};

export default Footer;
