// SPDX-License-Identifier: MIT

// react
import React, { useState, useEffect } from "react";
// next
import Router from "next/router";
// framer-motion
import { useScroll } from "framer-motion";
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
  const isNarrow = useMediaQuery({ query: "(max-width: 900px)" });
  const { scrollY } = useScroll();
  const router = Router.useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((scrollY) => {
      setScrolled(window.innerHeight * 0.9 < scrollY);
    });
  }, [scrollY, router.pathname]);

  return (
    <header
      className={styles.header}
      style={{
        color: router.pathname !== "/" || scrolled ? "#000" : "#fff",
        backgroundColor:
          router.pathname !== "/" || scrolled ? "#fdfdfd" : "rgba(0, 0, 0, 0)",
      }}
    >
      {isClient && isNarrow && (
        <Menu narrow setScrollable={setScrollable} scrolled={scrolled} />
      )}
      <div className={styles["site-name"]}>
        <Link href="/">浅野学園打越祭</Link>
      </div>
      {isClient && !isNarrow && <Menu />}
    </header>
  );
};

export default Header;
