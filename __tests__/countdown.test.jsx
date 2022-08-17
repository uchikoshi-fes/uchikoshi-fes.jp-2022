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
    hour = 12,
    minute = 0,
    second = 0,
    millisecond = 0,
  },
  queries
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
      for (const query of queries) {
        switch (query.type) {
          case "text":
            expect(await screen.findByText(query.text)).toBeInTheDocument();
            break;
          case "counter":
            const counter = await screen.findByTestId(`counter-${query.unit}`);
            expect(counter).toHaveTextContent(query.number);
            expect(counter).toBeInTheDocument();
            break;
          default:
            throw new Error(`Unknown query type: ${query.type}`);
        }
      }
    }
  );
};

describe("Countdown", () => {
  describe("文化祭１日目開催前", () => {
    // 100 日前付近
    testRemaining({ month: 6, day: 9, hour: 23, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "101" },
    ]);
    testRemaining({ month: 6, day: 10, hour: 0, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "100" },
    ]);
    testRemaining({ month: 6, day: 10, hour: 12, minute: 0, second: 0 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "100" },
    ]);
    testRemaining({ month: 6, day: 10, hour: 23, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "100" },
    ]);
    testRemaining({ month: 6, day: 11, hour: 0, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "99" },
    ]);

    // 50 日前付近
    testRemaining({ month: 7, day: 29, hour: 23, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "51" },
    ]);
    testRemaining({ month: 7, day: 30, hour: 0, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "50" },
    ]);
    testRemaining({ month: 7, day: 30, hour: 12, minute: 0, second: 0 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "50" },
    ]);
    testRemaining({ month: 7, day: 30, hour: 23, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "50" },
    ]);
    testRemaining({ month: 7, day: 31, hour: 0, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "49" },
    ]);

    // 100 時間前付近
    testRemaining({ month: 9, day: 14, hour: 4, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "日", number: "4" },
    ]);
    testRemaining({ month: 9, day: 14, hour: 5, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "時間", number: "99" },
      { type: "counter", unit: "分", number: "59" },
    ]);

    // 50 時間前付近
    testRemaining({ month: 9, day: 16, hour: 6, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "時間", number: "50" },
      { type: "counter", unit: "分", number: "00" },
    ]);
    testRemaining({ month: 9, day: 16, hour: 7, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目開幕まで/ },
      { type: "counter", unit: "時間", number: "49" },
      { type: "counter", unit: "分", number: "59" },
    ]);

    // 100 分前付近
    testRemaining(
      { month: 9, day: 18, hour: 7, minute: 19, second: 59, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "時間", number: "01" },
        { type: "counter", unit: "分", number: "40" },
      ]
    );
    testRemaining(
      { month: 9, day: 18, hour: 7, minute: 20, second: 0, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "分", number: "99" },
        { type: "counter", unit: "秒", number: "59" },
      ]
    );

    // 50 分前付近
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 9, second: 59, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "分", number: "50" },
        { type: "counter", unit: "秒", number: "00" },
      ]
    );
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 10, second: 0, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "分", number: "49" },
        { type: "counter", unit: "秒", number: "59" },
      ]
    );

    // 100 秒前付近
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 58, second: 19, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "分", number: "01" },
        { type: "counter", unit: "秒", number: "40" },
      ]
    );
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 58, second: 20, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "秒", number: "99" },
      ]
    );

    // 50 秒前付近
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 59, second: 9, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "秒", number: "50" },
      ]
    );
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 59, second: 10, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "秒", number: "49" },
      ]
    );

    // 開催直前
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 59, second: 58, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "秒", number: "01" },
      ]
    );
    testRemaining(
      { month: 9, day: 18, hour: 8, minute: 59, second: 59, millisecond: 500 },
      [
        { type: "text", text: /文化祭１日目開幕まで/ },
        { type: "counter", unit: "秒", number: "00" },
      ]
    );
  });

  describe("文化祭１日目開催中", () => {
    testRemaining({ month: 9, day: 18, hour: 9, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭１日目/ },
      { type: "text", text: /開催中/ },
    ]);
    testRemaining({ month: 9, day: 18, hour: 12, minute: 0, second: 0 }, [
      { type: "text", text: /文化祭１日目/ },
      { type: "text", text: /開催中/ },
    ]);
    testRemaining({ month: 9, day: 18, hour: 17, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭１日目/ },
      { type: "text", text: /開催中/ },
    ]);
  });

  describe("文化祭２日目開催中", () => {
    testRemaining({ month: 9, day: 19, hour: 9, minute: 0, second: 1 }, [
      { type: "text", text: /文化祭２日目/ },
      { type: "text", text: /開催中/ },
    ]);
    testRemaining({ month: 9, day: 19, hour: 12, minute: 0, second: 0 }, [
      { type: "text", text: /文化祭２日目/ },
      { type: "text", text: /開催中/ },
    ]);
    testRemaining({ month: 9, day: 19, hour: 17, minute: 59, second: 59 }, [
      { type: "text", text: /文化祭２日目/ },
      { type: "text", text: /開催中/ },
    ]);
  });
});
