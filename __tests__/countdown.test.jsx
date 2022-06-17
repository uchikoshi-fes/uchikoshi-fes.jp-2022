// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Countdown from "@/components/countdown";

describe("Countdown", () => {
  test("最低限のテキスト", () => {
    render(<Countdown />);
    expect(screen.getByText(/文化祭開幕まで/)).toBeInTheDocument();
  });
  // 100 日前付近
  test("06/09 23:59:00", async () => {
    Date.now = jest.fn(() => 1654786740000);
    render(<Countdown />);
    expect(await screen.findByText(/101/)).toBeInTheDocument();
    expect(await screen.findByText(/日/)).toBeInTheDocument();
  });
  test("06/10 00:01:00", async () => {
    Date.now = jest.fn(() => 1654786860000);
    render(<Countdown />);
    expect(await screen.findByText(/100/)).toBeInTheDocument();
    expect(await screen.findByText(/日/)).toBeInTheDocument();
  });
  test("06/10 12:00:00", async () => {
    Date.now = jest.fn(() => 1654830000000);
    render(<Countdown />);
    expect(await screen.findByText(/100/)).toBeInTheDocument();
    expect(await screen.findByText(/日/)).toBeInTheDocument();
  });
  test("06/10 23:59:00", async () => {
    Date.now = jest.fn(() => 1654873140000);
    render(<Countdown />);
    expect(await screen.findByText(/100/)).toBeInTheDocument();
    expect(await screen.findByText(/日/)).toBeInTheDocument();
  });
  test("06/11 00:01:00", async () => {
    Date.now = jest.fn(() => 1654873260000);
    render(<Countdown />);
    expect(await screen.findByText(/99/)).toBeInTheDocument();
    expect(await screen.findByText(/日/)).toBeInTheDocument();
  });
  // TODO: 24 時間以内時のテストを追加
});
