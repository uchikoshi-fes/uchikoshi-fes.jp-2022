// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import Header from "./header";
import Outline from "./outline";
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
      <main>{children}</main>
      <Outline />
      <Footer />
    </div>
  );
};

export default Layout;
