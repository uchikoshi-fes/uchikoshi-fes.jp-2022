// SPDX-License-Identifier: MIT

// components
import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Image = ({ ...props }) => {
  return process.env.isProduct ? (
    <NextImage {...props} />
  ) : (
    <NextImage {...props} loader={customLoader} />
  );
};

export default Image;
