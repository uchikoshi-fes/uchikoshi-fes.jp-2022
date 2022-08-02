// SPDX-License-Identifier: MIT

// hooks
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/client";
// components
import Link from "@/components/base/link";
import Menu from "./menu";
// styles
import styles from "./header.module.scss";

const Header = ({ setScrollable }) => {
  const isClient = useClient();
  const isNarrow = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <header className={styles.header}>
      {isClient && isNarrow && <Menu narrow setScrollable={setScrollable} />}
      <div className={styles["site-name"]}>
        <Link href="/">浅野学園打越祭</Link>
      </div>
      {isClient && !isNarrow && <Menu />}
    </header>
  );
};

export default Header;
