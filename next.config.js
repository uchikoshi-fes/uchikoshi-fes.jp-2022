// SPDX-License-Identifier: MIT

/** @type {import("next").NextConfig} */
let config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
};

config =
  process.env.CF_PAGES_BRANCH === "main"
    ? {
        ...config,
        env: { isProduct: true },
        images: {
          loader: "imgix",
          path: "https://uchikoshi-fes-2022.imgix.net/",
        },
      }
    : {
        ...config,
        env: { isProduct: false },
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
