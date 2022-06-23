// SPDX-License-Identifier: MIT

const Menu = ({ narrow }) => {
  return <nav>{narrow ? "hamburger" : "menu"}</nav>;
};

export default Menu;
