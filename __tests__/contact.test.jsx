// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Contact from "@/pages/contact";

describe("Contact", () => {
  test("最低限のテキストとリンク", async () => {
    render(<Contact />);
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();
    const issuesLink = screen.getByText(/GitHub Issues/);
    expect(issuesLink).toBeInTheDocument();
    expect(issuesLink).toHaveAttribute(
      "href",
      "https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022/issues"
    );
  });
});
