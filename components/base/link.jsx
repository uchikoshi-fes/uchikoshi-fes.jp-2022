// SPDX-License-Identifier: MIT

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
// styles
import styles from "./link.module.scss";
// icons
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Link = (props) => {
  const { href, children } = props;

  // internal link
  if (href.startsWith("/") || href === "")
    return (
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
    );
  // external link
  else
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className={styles["external-icon"]}
        />
      </a>
    );
};

export default Link;
