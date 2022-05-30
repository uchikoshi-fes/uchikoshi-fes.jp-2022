// SPDX-License-Identifier: MIT

// components
import Header from "./header";
import Footer from "./footer";
// styles

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
