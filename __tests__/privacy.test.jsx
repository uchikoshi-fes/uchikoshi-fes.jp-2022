// SPDX-License-Identifier: CC-BY-NC-4.0

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Privacy from "@/pages/privacy";

describe("Privacy", () => {
  test("最低限のテキスト", () => {
    render(<Privacy />);
    expect(screen.getByText("プライバシーポリシー")).toBeInTheDocument();
    expect(screen.getByText("個人情報とは")).toBeInTheDocument();
    expect(screen.getByText("アクセス解析ツールに関して")).toBeInTheDocument();
    expect(
      screen.getByText("他サイトの埋め込みコンテンツに関して")
    ).toBeInTheDocument();
    //expect(screen.getByText("Google ログインに関して")).toBeInTheDocument();
    expect(
      screen.getByText("プライバシーポリシーの適用範囲に関して")
    ).toBeInTheDocument();
    expect(screen.getByText("閲覧者の同意に関して")).toBeInTheDocument();
  });
});
