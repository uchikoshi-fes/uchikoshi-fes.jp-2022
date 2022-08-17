// SPDX-License-Identifier: MIT

// test
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Countdown from "@/components/countdown";

// Date.prototype.setHours のタイムゾーンを +9 に固定
Date.prototype.setHours = jest.fn(function setHours(hoursValue, ...minutes) {
  return this.setUTCHours(hoursValue - 9, ...minutes);
});

const testRemaining = (
  {
    year = 2022,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
  },
  texts
) => {
  const time = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second, millisecond) -
      9 * 3600000
  );
  test(
    time.toLocaleString("ja-JP", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Asia/Tokyo",
    }),
    async () => {
      Date.now = jest.fn(() => time.getTime());
      render(<Countdown />);
      for (const text of texts)
        expect(await screen.findByText(text)).toBeInTheDocument();
    }
  );
};

describe("Countdown", () => {
  // 100 日前付近
  testRemaining({ month: 6, day: 9, hour: 23, minute: 59, second: 59 }, [
    /文化祭１日目開幕まで/,
    /101/,
  ]);
  testRemaining({ month: 6, day: 10, hour: 0, minute: 0, second: 1 }, [
    /文化祭１日目開幕まで/,
    /100/,
  ]);
  testRemaining({ month: 6, day: 10, hour: 12, minute: 0, second: 0 }, [
    /文化祭１日目開幕まで/,
    /100/,
  ]);
  testRemaining({ month: 6, day: 10, hour: 23, minute: 59, second: 59 }, [
    /文化祭１日目開幕まで/,
    /100/,
  ]);
  testRemaining({ month: 6, day: 11, hour: 0, minute: 0, second: 1 }, [
    /文化祭１日目開幕まで/,
    /99/,
  ]);
});
