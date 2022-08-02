// SPDX-License-Identifier: MIT

// components
import NextLink from "next/link";

const Link = ({ href, children, ...props }) => {
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
      </a>
    );
};

export default Link;
