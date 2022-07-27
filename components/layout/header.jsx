// SPDX-License-Identifier: MIT

// react
import React from "react";
import { useMediaQuery } from "react-responsive";
// components
import Link from "@/components/base/link";
import Menu from "./menu";
// styles
import styles from "./header.module.scss";

const useClient = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);
  return isClient;
};

const Header = () => {
  const isClient = useClient();
  const isNarrow = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <header className={styles.header}>
      {isClient && isNarrow && <Menu narrow />}
      <div className={styles["site-name"]}>
        <Link href="/">浅野学園打越祭</Link>
      </div>
      {isClient && !isNarrow && <Menu />}
    </header>
  );
};

export default Header;
