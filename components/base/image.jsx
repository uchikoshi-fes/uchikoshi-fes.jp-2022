// SPDX-License-Identifier: MIT

// next
import { useRouter } from "next/router";
// components
import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Image = ({ src, ...props }) => {
  const rootRelativePath = useRouter()?.pathname.replace(/[^\/]+$/, "");
  return (
    <NextImage
      src={(src.startsWith("/") ? "" : rootRelativePath) + src}
      {...props}
      loader={process.env.isProduct ? null : customLoader}
    />
  );
};

export default Image;
