// SPDX-License-Identifier: MIT

// react
import React from "react";
// next
import Router from "next/router";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./menu.module.scss";
// icons
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", name: "トップ" },
  { href: "/reserve", name: "来場申し込み" },
  //{ href: "/sponsors", name: "スポンサー" },
  { href: "/orgs", name: "団体一覧" },
  { href: "/map", name: "校内マップ" },
  { href: "/events", name: "イベント" },
  { href: "/radio", name: "アサノラジオ" },
  { href: "/articles", name: "記事" },
];

const MenuLinks = ({ narrow }) => {
  const router = Router.useRouter();

  return (
    <ul>
      {links.map(({ href, name, color }) => {
        console.log(router.pathname);
        // 現在のページがこのリンク以下の場合は active にする
        let className;
        if (
          href === "/"
            ? router.pathname === href
            : router.pathname.startsWith(href)
        ) {
          className = narrow ? styles["narrow-active"] : styles["wide-active"];
        }
        return (
          <li className={className} key={href}>
            <Link href={href} className={styles.link}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const NarrowMenu = ({ setScrollable }) => {
  const [open, setOpen] = React.useState(false);
  const router = Router.useRouter();

  /*
   * setScrollable を変更することはないだろうが、
   * 依存性的に変更されることも考慮すべきである。
   * そして setScrollable が変更された際は呼び直すのが適切と考えられる。
   * 以上のことから依存配列に setScrollable を追加する。
   */
  React.useEffect(() => {
    setScrollable(!open);
    return () => setScrollable(true);
  }, [setScrollable, open]);

  router.events.on("routeChangeStart", () => setOpen(false));

  return (
    <>
      <button
        title="目次を開く"
        className={styles.hamburger}
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {open && (
        <div
          className={styles["narrow-open-background"]}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div className={`${styles.narrow} ${open ? styles["narrow-open"] : ""}`}>
        <button
          title="目次を閉じる"
          className={styles["narrow-closebutton"]}
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles["narrow-content"]}>
          <MenuLinks narrow />
        </div>
      </div>
    </>
  );
};

const WideMenu = () => {
  return (
    <div className={styles.wide}>
      <MenuLinks />
    </div>
  );
};

const Menu = ({ narrow, setScrollable }) => {
  return (
    <nav className={styles.container}>
      {narrow ? <NarrowMenu setScrollable={setScrollable} /> : <WideMenu />}
    </nav>
  );
};

export { links };
export default Menu;
