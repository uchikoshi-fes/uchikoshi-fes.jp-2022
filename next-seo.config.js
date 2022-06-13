// SPDX-License-Identifier: MIT

export const SITE_NAME = "第43回打越祭公式サイト";
export const DEFAULT_TITLE = `${SITE_NAME} (浅野学園2022年度文化祭)`;
export const DESCRIPTION =
  "中高一貫の男子校「浅野中学校・高等学校」の" +
  "中学生、高校生、全員で作る展示の数々をどうぞ。" +
  "東京や川崎に近い、神奈川県横浜市にて2022年9月開催予定。" +
  "史上最高の文化祭へ是非お越しください！";

export const genTitle = (pageName) => `${pageName} - ${SITE_NAME}`;

export default (router) => {
  const url =
    "https://uchikoshi-fes.jp" +
    (router.basePath ?? "") +
    (router.locale === router.defaultLocale ? "" : router.locale) +
    router.asPath;

  return {
    titleTemplate: genTitle("%s"),
    defaultTitle: DEFAULT_TITLE,
    ...(process.env.APP_ENV === "production"
      ? {}
      : { dangerouslySetAllPagesToNoIndex: true }),
    description: DESCRIPTION,
    canonical: url,
    additionalMetaTags: [
      { name: "theme-color", content: "#7cc28e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent", // default,black,black-translucent
      },
      { name: "apple-mobile-web-app-title", content: "打越祭サイト" },
    ],
    twitter: {
      cardType: "summary_large_image",
      site: "@uchikoshifes",
    },
    openGraph: {
      url,
      type: "website",
      title: DEFAULT_TITLE,
      description: DESCRIPTION,
      images: [],
      locale: "ja_JP",
      site_name: SITE_NAME,
    },
  };
};
