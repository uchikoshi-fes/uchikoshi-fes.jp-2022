// SPDX-License-Identifier: MIT

// components
import Menu from "./menu";
// styles
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      ヘッダ
      <Menu />
    </header>
  );
};

export default Header;
