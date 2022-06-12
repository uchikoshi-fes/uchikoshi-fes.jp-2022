// SPDX-License-Identifier: MIT

import { SITE_NAME, genTitle } from "@/next-seo.config";

describe("next-seo", () => {
  test("正しいタイトル", () => {
    expect(genTitle("ページ名")).toBe(`ページ名 - ${SITE_NAME}`);
  });
});
