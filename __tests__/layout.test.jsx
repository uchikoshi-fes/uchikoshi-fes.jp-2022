// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Layout from "../components/layout/layout";
import Header from "../components/layout/header";
import Menu from "../components/layout/menu";
import Outline from "../components/layout/outline";
import Footer from "../components/layout/footer";

describe("Layout", () => {
  test("レイアウトの子要素", () => {
    render(<Layout>[LEYOUT-CHILDREN]</Layout>);
    expect(screen.getByText("[LEYOUT-CHILDREN]")).toBeInTheDocument();
  });
  test("ヘッダの最低限のテキスト", () => {
    render(<Header />);
    expect(screen.getByText(/打越祭/)).toBeInTheDocument();
  });
  test("メニューの最低限のテキスト", () => {
    render(<Menu />);
    // TODO: メニュー制作時にテスト追加
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
  test("フッタの最低限のテキスト", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2022 浅野学園生徒会/)).toBeInTheDocument();
  });
});
