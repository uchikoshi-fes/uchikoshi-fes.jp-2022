// SPDX-License-Identifier: MIT

// hooks
import { useRouter } from "next/router";
// components
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import styles from "./link.module.scss";
// icons
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const resetScroll = () => {
  window.scrollTo(0, 0);
  for (const container of document.getElementsByClassName("page-container")) {
    container.scrollTo(0, 0);
  }
};

const Link = ({ href, scroll = true, noIcon = false, children, ...props }) => {
  const router = useRouter();

  // internal link
  if (href.startsWith("/") || href === "") {
    return (
      <NextLink href={href} scroll={scroll}>
        <a
          href={href}
          {...props}
          onClick={() => {
            if (!scroll) {
              // 一度だけページ遷移時のスクロールリセットを無効化する
              router.events.off("routeChangeComplete", resetScroll);
              router.events.once("routeChangeComplete", () =>
                router.events.on("routeChangeComplete", resetScroll)
              );
            }
          }}
        >
          {children}
        </a>
      </NextLink>
    );
    // external link
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {!noIcon && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles["external-icon"]}
          />
        )}
      </a>
    );
  }
};

export { resetScroll };
export default Link;
