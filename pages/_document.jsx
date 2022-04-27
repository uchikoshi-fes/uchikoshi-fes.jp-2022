/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

// components
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns#" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
