// SPDX-License-Identifier: Cc-BY-NC-4.0

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Slogan from "@/components/top/slogan";

describe("Slogan", () => {
  test("最低限のテキスト", () => {
    render(<Slogan />);
    expect(screen.getByText(/スローガン/)).toBeInTheDocument();
    expect(screen.getByText(/雲外蒼天/)).toBeInTheDocument();
    expect(screen.getByText(/「うんがいそうてん」/)).toBeInTheDocument();
    expect(
      screen.getByText(/困難を努力して克服すれば良いことが待っている/)
    ).toBeInTheDocument();
  });
});
