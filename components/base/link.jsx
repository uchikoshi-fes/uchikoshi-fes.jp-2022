import NextLink from "next/link";

const Link = (props) => {
  const href = props.href;
  const children = props.children;

  return href.startsWith("/") || href === "" ? (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default Link;
