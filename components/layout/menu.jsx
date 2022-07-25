// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./menu.module.scss";
// icons
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuLinks = () => {
  return <>{/* TODO */}</>;
};

const NarrowMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        title="目次を開く"
        className={styles.hamburger}
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`${styles.narrow} ${open ? styles["narrow-open"] : ""}`}>
        <button
          title="目次を閉じる"
          className={styles["narrow-closebutton"]}
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className={styles["narrow-content"]}>
          <MenuLinks />
        </ul>
      </div>
    </>
  );
};

const WideMenu = () => {
  return (
    <ul className={styles.wide}>
      <MenuLinks />
    </ul>
  );
};

const Menu = ({ narrow }) => {
  return (
    <nav className={styles.container}>
      {narrow ? <NarrowMenu /> : <WideMenu />}
    </nav>
  );
};

export default Menu;
