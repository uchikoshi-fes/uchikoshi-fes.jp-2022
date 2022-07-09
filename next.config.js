// SPDX-License-Identifier: MIT

const withPlugins = require("next-compose-plugins");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    loader: "custom",
  },
};

const plugins = [];

plugins.push([
  require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  }),
]);
module.exports = withPlugins(plugins, nextConfig);
