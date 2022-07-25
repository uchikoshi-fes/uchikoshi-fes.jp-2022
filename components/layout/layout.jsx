// SPDX-License-Identifier: MIT

// components
import Header from "./header";
import Outline from "./outline";
import Footer from "./footer";
// styles
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Outline />
      <Footer />
    </div>
  );
};

export default Layout;
