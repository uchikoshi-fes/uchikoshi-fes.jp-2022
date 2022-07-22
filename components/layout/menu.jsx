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

const Menu = ({ narrow }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={styles.container}>
      {narrow ? (
        <>
          <button className={styles.hamburger} onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className={`${styles.narrow} ${open ? styles["narrow-open"] : ""}`}
          >
            <button
              className={styles["narrow-closebutton"]}
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className={styles["narrow-content"]}>
              {/* TODO: ここにメニュー */}
            </ul>
          </div>
        </>
      ) : (
        <ul className={styles.wide}>{/* TODO: ここにメニュー */}</ul>
      )}
    </nav>
  );
};

export default Menu;
