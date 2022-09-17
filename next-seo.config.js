// SPDX-License-Identifier: MIT

import ogImage from "./public/icons/og.jpg";
import favicon from "./public/icons/favicon.ico";
import icon from "./public/icons/icon.svg";
import appleTouchIcon from "./public/icons/apple-touch-icon.png";

export const SITE_NAME = "第43回打越祭公式サイト";
export const DEFAULT_TITLE = `${SITE_NAME} (浅野学園2022年度文化祭)`;
export const DESCRIPTION =
  "中高一貫の男子校「浅野中学校・高等学校」の" +
  "中学生、高校生、全員で作る展示の数々をどうぞ。" +
  "東京や川崎に近い、神奈川県横浜市にて2022年9月開催決定。" +
  "史上最高の文化祭へ是非お越しください！";

export const genTitle = (pageName) => `${pageName} - ${SITE_NAME}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (router) => {
  const url =
    "https://uchikoshi-fes.jp" +
    (router.basePath ?? "") +
    (router.locale === router.defaultLocale ? "" : router.locale) +
    router.asPath;

  // Cloudflare Pages ではプレビューを判定して noindex は不要
  // Ref: https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022/issues/93#issuecomment-1154838583
  return {
    titleTemplate: genTitle("%s"),
    defaultTitle: DEFAULT_TITLE,
    description: DESCRIPTION,
    canonical: url,
    additionalMetaTags: [
      { name: "theme-color", content: "#b7282e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent", // default,black,black-translucent
      },
      { name: "apple-mobile-web-app-title", content: "打越祭サイト" },
    ],
    twitter: {
      cardType: "summary",
      site: "@uchikoshifes",
    },
    openGraph: {
      url,
      type: "website",
      title: DEFAULT_TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
          alt: "打越祭ロゴ",
        },
      ],
      locale: "ja_JP",
      site_name: SITE_NAME,
    },
    additionalLinkTags: [
      {
        rel: "icon",
        href: favicon.src,
        sizes: "any",
      },
      {
        rel: "icon",
        href: icon.src,
        type: "image/svg+xml",
      },
      {
        rel: "apple-touch-icon",
        href: appleTouchIcon.src,
      },
    ],
  };
};
