// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// components
import Link from "@/components/base/link";
// styles
import styles from "./asano-radio.module.scss";

// 番組表データは以下の Google Spreadsheet を元に作成しています。
// https://docs.google.com/spreadsheets/d/1RG_a3mT8D_l1l8yx_eqrapjpBuBapCX5S_D9c5lM2Bg/edit?usp=drivesdk
// 付属の Apps Script で JSON に変換できますが、表記ブレなどの細かな修正は手動でする必要があります。
const SCHEDULE = [
  {
    title: "day 1",
    date: "2022/09/18",
    programs: [
      {
        title: "オープニング",
        type: "special",
        start: "09:45",
        end: "10:00",
      },
      {
        title: "地学部",
        type: "guests",
        start: "10:05",
        end: "10:20",
      },
      {
        title: "物理部展♯2022",
        type: "guests",
        start: "10:20",
        end: "10:35",
      },
      {
        title: "生物部",
        type: "guests",
        start: "10:35",
        end: "10:50",
      },
      {
        title: "化学部",
        type: "guests",
        start: "10:50",
        end: "11:05",
      },
      {
        title: "図書研究部",
        type: "guests",
        start: "11:10",
        end: "11:25",
      },
      {
        title: "図書委員会",
        type: "guests",
        start: "11:25",
        end: "11:40",
      },
      {
        title: "MISSION AGENT",
        type: "guests",
        start: "11:40",
        end: "11:55",
      },
      {
        title: "田園調布学園",
        type: "special",
        start: "12:00",
        end: "12:30",
      },
      {
        title: "おにさんこちら、てのなるほうへ",
        type: "guests",
        start: "12:30",
        end: "12:45",
      },
      {
        title: "生徒会",
        type: "guests",
        start: "12:45",
        end: "13:00",
      },
      {
        title: "フリートークwith文実長",
        type: "free",
        start: "13:05",
        end: "13:20",
      },
      {
        title: "フリートークwith体実長",
        type: "free",
        start: "13:25",
        end: "13:40",
      },
      {
        title: "フリートークwith生徒会長",
        type: "free",
        start: "13:40",
        end: "13:55",
      },
      {
        title: "フリートークwith偉い人たち",
        type: "free",
        start: "14:00",
        end: "14:30",
      },
      {
        title: "フリートークwith文実幹部",
        type: "free",
        start: "14:30",
        end: "15:00",
      },
      {
        title: "フリートークwith先生",
        type: "free",
        start: "15:05",
        end: "15:20",
      },
      {
        title: "エンディング",
        type: "special",
        start: "15:20",
        end: "15:35",
      },
    ],
  },
  {
    title: "day 2",
    date: "2022/09/19",
    programs: [
      {
        title: "オープニング",
        type: "special",
        start: "09:45",
        end: "10:00",
      },
      {
        title: "クイズ研究会",
        type: "guests",
        start: "10:05",
        end: "10:20",
      },
      {
        title: "ASET 浅野学園特撮研究会",
        type: "guests",
        start: "10:20",
        end: "10:35",
      },
      {
        title: "ikoth。",
        type: "guests",
        start: "10:35",
        end: "10:50",
      },
      {
        title: "Asano Debating Union",
        type: "guests",
        start: "10:50",
        end: "11:05",
      },
      {
        title: "吹奏楽部",
        type: "guests",
        start: "11:10",
        end: "11:25",
      },
      {
        title: "美術部",
        type: "guests",
        start: "11:25",
        end: "11:40",
      },
      {
        title: "りすのおうち",
        type: "guests",
        start: "11:40",
        end: "11:55",
      },
      {
        title: "田園調布学園",
        type: "special",
        start: "12:00",
        end: "12:30",
      },
      {
        title: "歴史研究部",
        type: "guests",
        start: "12:30",
        end: "12:45",
      },
      {
        title: "鉄道研究部",
        type: "guests",
        start: "12:45",
        end: "13:00",
      },
      {
        title: "ディベート（仮称）",
        type: "special",
        start: "13:05",
        end: "13:20",
      },
      {
        title: "ディベート（仮称）",
        type: "special",
        start: "13:25",
        end: "13:55",
      },
      {
        title: "フリートークwith文実幹部",
        type: "free",
        start: "14:00",
        end: "15:00",
      },
      {
        title: "フリートーク",
        type: "free",
        start: "15:05",
        end: "15:20",
      },
      {
        title: "エンディング",
        type: "special",
        start: "15:20",
        end: "15:35",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <article className={styles.schedule}>
      <h3>番組表</h3>
      {SCHEDULE.map(({ title, date, programs }) => (
        <table border="1" key={title}>
          <thead>
            <tr>
              <th colSpan="2">{title}</th>
            </tr>
            <tr>
              <th>時間</th>
              <th>番組</th>
            </tr>
          </thead>
          <tbody>
            {programs.map(({ title, type, start, end }) => (
              <tr key={`${title}-${start}`}>
                <td>
                  {start} ~ {end}
                </td>
                <td>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </article>
  );
};

const AsanoRadio = () => {
  return (
    <article className={styles["asano-radio"]}>
      <h2>アサノラジオ局</h2>
      <div className={styles["youtube-container"]}>
        {/* TODO: YouTube ライブ/アーカイブ動画が自動で埋め込まれるようにする */}
      </div>
      <div className={styles["schedule-container"]}>
        <Schedule />
      </div>
      <p>
        これまでのアサノラジオのアーカイブは、
        <Link href="https://youtube.com/channel/UC8gGRNYCfqQ2vkPEGwFnr8w">
          アサノラジオ局の YouTube チャンネル
        </Link>
        をご覧ください。
      </p>
    </article>
  );
};

export { SCHEDULE };
export default AsanoRadio;
