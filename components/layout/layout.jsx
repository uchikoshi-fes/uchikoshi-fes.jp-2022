// SPDX-License-Identifier: MIT

// components
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
// styles

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
