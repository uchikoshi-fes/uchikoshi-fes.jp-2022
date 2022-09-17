// SPDX-License-Identifier: MIT

import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import "@testing-library/jest-dom";

window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Index", () => {
  test("最低限のテキスト", () => {
    const { getByText } = render(<Index />);
    expect(screen.getByText(/雲外蒼天/)).toBeInTheDocument();
  });
});
