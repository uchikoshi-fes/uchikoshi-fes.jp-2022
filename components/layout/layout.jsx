// SPDX-License-Identifier: MIT

// components
import Header from "./header";
import Outline from "./outline";
import Footer from "./footer";
// styles

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Outline />
      <Footer />
    </>
  );
};

export default Layout;
