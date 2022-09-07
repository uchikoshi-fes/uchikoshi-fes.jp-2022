// SPDX-License-Identifier: MIT

/** @type {import("next").NextConfig} */
let config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    loader: "custom",
  },
};

config = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})(config);

console.log(config);

module.exports = () => config;
