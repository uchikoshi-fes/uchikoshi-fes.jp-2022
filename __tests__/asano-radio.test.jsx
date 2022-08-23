// SPDX-License-Identifier: Cc-BY-NC-4.0

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import AsanoRadio from "@/components/asano-radio";

describe("AsanoRadio", () => {
  test("最低限のテキストとリンク", () => {
    render(<AsanoRadio />);
    expect(screen.getByText("アサノラジオ局")).toBeInTheDocument();
    expect(screen.getByText("番組表")).toBeInTheDocument();
    const youtubeLink = screen.getByText("アサノラジオ局の YouTube チャンネル");
    expect(youtubeLink).toBeInTheDocument();
    expect(youtubeLink).toHaveAttribute(
      "href",
      "https://youtube.com/channel/UC8gGRNYCfqQ2vkPEGwFnr8w"
    );
  });
});
