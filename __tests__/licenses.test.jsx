// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Licenses, { getStaticProps } from "@/pages/licenses";

describe("Licenses", () => {
  test("最低限のテキスト", async () => {
    render(<Licenses {...(await getStaticProps()).props} />);
    expect(screen.getByText("ライセンス")).toBeInTheDocument();
    expect(screen.getByText(/CC-BY-NC-4.0/)).toBeInTheDocument();
    expect(screen.getByText("開発貢献者")).toBeInTheDocument();
    expect(screen.getByText("TwoSquirrels")).toBeInTheDocument();
    expect(screen.getByText("ライブラリ")).toBeInTheDocument();
    expect(screen.getByText(/next@/)).toBeInTheDocument();
    expect(screen.getByText(/react@/)).toBeInTheDocument();
  });
});
