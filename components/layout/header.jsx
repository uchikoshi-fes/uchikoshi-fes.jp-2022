// SPDX-License-Identifier: MIT

// components
import Link from "@/components/base/link";
import Menu from "./menu";
// styles
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/" className={styles["index-link"]}>
          浅野学園打越祭
        </Link>
        <Menu />
      </header>
    </div>
  );
};

export default Header;
