// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import Header from "./header";
import Footer from "./footer";
// styles
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const [scrollable, setScrollable] = React.useState(true);

  return (
    <div
      className={`page-container ${styles.layout} ${
        scrollable ? "" : styles["stop-scroll"]
      }`}
    >
      <Header setScrollable={setScrollable} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
