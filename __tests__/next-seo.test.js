/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

import { SITE_NAME, genTitle } from "../next-seo.config";

describe("next-seo", () => {
  test("正しいタイトル", () => {
    expect(genTitle("ページ名")).toBe(`ページ名 - ${SITE_NAME}`);
  });
});
