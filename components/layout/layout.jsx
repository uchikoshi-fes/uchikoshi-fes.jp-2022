// SPDX-License-Identifier: MIT

// components
import Header from "@/components/layout/header";
import Outline from "@/components/layout/outline";
import Footer from "@/components/layout/footer";
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
