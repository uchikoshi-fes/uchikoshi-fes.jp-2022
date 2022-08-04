// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// react
import Router from "next/router";
// components
import Layout from "@/components/layout/layout";
import Header from "@/components/layout/header";
import Menu from "@/components/layout/menu";
import Outline from "@/components/layout/outline";
import Footer from "@/components/layout/footer";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {},
    pathname: "/",
    asPath: "/",
    route: "/",
    reload: jest.fn(),
    back: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: { on: jest.fn() },
    isFallback: false,
    staticContext: {},
  }),
}));

describe("Layout", () => {
  test("レイアウトの子要素", () => {
    render(<Layout>[LEYOUT-CHILDREN]</Layout>);
    expect(screen.getByText("[LEYOUT-CHILDREN]")).toBeInTheDocument();
  });
  test("ヘッダの最低限のテキスト", () => {
    render(<Header />);
    expect(screen.getByText(/打越祭/)).toBeInTheDocument();
  });
  const testMenuLinks = () =>
    [
      { href: "/", name: "トップ" },
      { href: "/sponsors", name: "スポンサー" },
      { href: "/orgs/", name: "団体一覧" },
      { href: "/map/", name: "校内マップ" },
      { href: "/events/", name: "イベント" },
      { href: "/articles/", name: "記事" },
    ].forEach(({ href, name }) => {
      const link = screen.getByText(name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  test("PC レイアウト時メニューの最低限のリンク", () => {
    render(<Menu />);
    testMenuLinks();
  });
  test("モバイル時メニューの最低限のリンク", () => {
    render(<Menu narrow setScrollable={jest.fn()} />);
    testMenuLinks();
  });
  test("開催概要の最低限のテキスト", () => {
    render(<Outline />);
    expect(screen.getByText(/開催概要/)).toBeInTheDocument();
    expect(screen.getByText(/日程/)).toBeInTheDocument();
    expect(screen.getByText(/9.+18.+19|９.+１８.+１９/)).toBeInTheDocument();
    expect(screen.getByText(/雨天決行/)).toBeInTheDocument();
    expect(screen.getByText(/アクセス/)).toBeInTheDocument();
    expect(screen.getByText(/浅野中学校・高等学校/)).toBeInTheDocument();
    expect(
      screen.getByText(/〒221-0012 神奈川県横浜市神奈川区子安台１丁目３-１/)
    ).toBeInTheDocument();
  });
  test("フッタの最低限のテキストとリンク", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2022 浅野学園生徒会/)).toBeInTheDocument();
    [
      { href: "/", name: "トップ" },
      { href: "/sponsors", name: "スポンサー" },
      { href: "/orgs/", name: "団体一覧" },
      { href: "/map/", name: "校内マップ" },
      { href: "/events/", name: "イベント" },
      { href: "/articles/", name: "記事" },
      { href: "/contact", name: "お問い合わせ" },
      { href: "/privacy", name: "プライバシーポリシー" },
      { href: "/licenses", name: "ライセンス" },
      { href: "https://www.asano.ed.jp/", name: /浅野学園公式サイト/ },
    ].forEach(({ href, name }) => {
      const link = screen.getByText(name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });
});
