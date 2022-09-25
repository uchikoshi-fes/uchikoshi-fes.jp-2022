// SPDX-License-Identifier: MIT

// react
import React from "react";
// hooks
import { useRouter } from "next/router";
import { useScroll } from "framer-motion";
// components
import Header from "./header";
import Footer from "./footer";
// styles
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const [scrollable, setScrollable] = React.useState(true);
  const [headerTransparent, setHeaderTransparent] = React.useState(null);
  const router = useRouter();
  const containerRef = React.useRef(null);
  const { scrollY } = useScroll({ container: containerRef });
  React.useEffect(() => {
    const updateHeaderTransparent = (pagePath, pageScrollY) =>
      setHeaderTransparent(
        pagePath === "/" && pageScrollY <= window.innerHeight * 0.9
      );
    updateHeaderTransparent(router.pathname, scrollY.get());
    return scrollY.onChange((pageScrollY) =>
      updateHeaderTransparent(router.pathname, pageScrollY)
    );
  }, [router.pathname]);

  return (
    <div
      className={`page-container ${styles.layout} ${
        scrollable ? "" : styles["stop-scroll"]
      }`}
      ref={containerRef}
    >
      {headerTransparent !== null && (
        <Header setScrollable={setScrollable} transparent={headerTransparent} />
      )}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
