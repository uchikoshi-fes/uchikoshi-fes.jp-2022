// SPDX-License-Identifier: MIT

const withPlugins = require("next-compose-plugins");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const plugins = [];

plugins.push([
  require("next-optimized-images"),
  {
    handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
    imagesName: "[name].[ext]?hash=[hash]", // defailt: [name]-[hash].[ext]
    removeOriginalExtension: true, // example: test.png.webp -> test.webp
    responsive: {
      name: "[name]-w[width].[ext]?hash=[hash]", // default: [hash]-[width].[ext]
      sizes: [80, 160, 320, 640, 1280, 2560],
      adapter: require("responsive-loader/sharp"),
      emitFile: false,
    },
  },
]);

module.exports = withPlugins(plugins, nextConfig);
