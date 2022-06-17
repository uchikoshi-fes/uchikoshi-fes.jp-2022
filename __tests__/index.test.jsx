// SPDX-License-Identifier: MIT

import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import "@testing-library/jest-dom";

describe("Index", () => {
  test("最低限のテキスト", () => {
    const { getByText } = render(<Index />);
    expect(screen.getByText(/浅野学園2022年度文化祭/)).toBeInTheDocument();
  });
});
