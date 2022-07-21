// SPDX-License-Identifier: MIT

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import styles from "./menu.module.scss";
// icons
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ narrow }) => {
  if (narrow)
    return (
      <button className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    );
  else return <nav>Menu is here.</nav>;
};

export default Menu;
