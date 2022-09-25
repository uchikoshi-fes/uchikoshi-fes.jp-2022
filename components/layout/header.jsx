// SPDX-License-Identifier: MIT

// react
import React from "react";
// next
import Router from "next/router";
// hooks
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/client";
// components
import Link from "@/components/base/link";
import Menu from "./menu";
// styles
import styles from "./header.module.scss";

const Header = ({ setScrollable, transparent = false }) => {
  const isClient = useClient();
  const isNarrow = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <header
      className={styles.header}
      style={{
        color: transparent ? "#fff" : "#000",
        backgroundColor: transparent ? "rgba(0, 0, 0, 0)" : "#fdfdfd",
      }}
    >
      {isClient && isNarrow && <Menu narrow setScrollable={setScrollable} />}
      <div className={styles["site-name"]}>
        <Link href="/">浅野学園打越祭</Link>
      </div>
      {isClient && !isNarrow && <Menu />}
    </header>
  );
};

export default Header;
