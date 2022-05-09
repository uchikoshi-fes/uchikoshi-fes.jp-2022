/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import "@testing-library/jest-dom";

describe("Index", () => {
  test("最低限のテキスト", () => {
    const { getByText } = render(<Index />);
    expect(screen.getByText(/浅野学園2022年度文化祭/)).toBeInTheDocument();
    expect(screen.getByText(/© 2022 uchikoshi-fes/)).toBeInTheDocument();
  });
});
