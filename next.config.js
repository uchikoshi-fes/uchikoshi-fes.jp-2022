// SPDX-License-Identifier: MIT

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    loader: "custom",
  },
};

module.exports = () => {
  const plugins = [
    require("@next/mdx")({
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
      },
    }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};
