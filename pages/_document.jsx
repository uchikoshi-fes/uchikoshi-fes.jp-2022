// SPDX-License-Identifier: MIT

// components
import { Html, Head, Main, NextScript } from "next/document";
// config
import PACKAGE from "@/package";

const Document = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `/* サイトの中身: ${PACKAGE.homepage} */`,
        }}
      />
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

export default Document;
