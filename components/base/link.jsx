// SPDX-License-Identifier: MIT

// components
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import styles from "./link.module.scss";
// icons
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Link = ({ href, noIcon = false, children, ...props }) => {
  // internal link
  if (href.startsWith("/") || href === "")
    return (
      <NextLink href={href}>
        <a href={href} {...props}>
          {children}
        </a>
      </NextLink>
    );
  // external link
  else
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
};

export default Link;
