// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./asano-radio.module.scss";
// icons
import {
  faClock,
  faRadio,
  faUsers,
  faComments,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// 番組表データは以下の Google Spreadsheet を元に作成しています。
// https://docs.google.com/spreadsheets/d/1RG_a3mT8D_l1l8yx_eqrapjpBuBapCX5S_D9c5lM2Bg/edit?usp=drivesdk
// 付属の Apps Script で JSON に変換できますが、表記ブレなどの細かな修正は手動でする必要があります。
// title を Array にした場合、それぞれの string の間に <wbr /> が挿入されます。
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
        title: ["おにさんこちら、", "てのなるほうへ"],
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
        title: ["フリートーク", "with文実長"],
        type: "free",
        start: "13:05",
        end: "13:20",
      },
      {
        title: ["フリートーク", "with体実長"],
        type: "free",
        start: "13:25",
        end: "13:40",
      },
      {
        title: ["フリートーク", "with生徒会長"],
        type: "free",
        start: "13:40",
        end: "13:55",
      },
      {
        title: ["フリートーク", "with偉い人たち"],
        type: "free",
        start: "14:00",
        end: "14:30",
      },
      {
        title: ["フリートーク", "with文実幹部"],
        type: "free",
        start: "14:30",
        end: "15:00",
      },
      {
        title: ["フリートーク", "with先生"],
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
        title: ["ASET ", "浅野学園特撮研究会"],
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
        title: ["フリートーク", "with文実幹部"],
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

const timeStrToMinutes = (timeString) => {
  const [hour, minute] = timeString.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
};

const Schedule = () => {
  return (
    <article className={styles.schedule}>
      <h3>番組表</h3>
      <div>
        <div>
          {SCHEDULE.map(({ title, date, programs }) => (
            <table className={styles["schedule-table"]} key={title}>
              <thead>
                <tr>
                  <th colSpan="2">{title}</th>
                </tr>
                <tr>
                  <th className={styles["schedule-time"]}>
                    <FontAwesomeIcon
                      icon={faClock}
                      className={styles["attached-icon"]}
                    />
                    時間
                  </th>
                  <th>
                    <FontAwesomeIcon
                      icon={faRadio}
                      className={styles["attached-icon"]}
                    />
                    番組
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map(({ title, type, start, end }, index) => {
                  const prevMinutes = timeStrToMinutes(
                    programs[index - 1]?.end ?? start
                  );
                  const startMinutes = timeStrToMinutes(start);
                  const endMinutes = timeStrToMinutes(end);
                  return (
                    <React.Fragment key={`${title}-${start}`}>
                      {startMinutes !== prevMinutes && (
                        <tr>
                          <td
                            colSpan="2"
                            style={{
                              height: `${(startMinutes - prevMinutes) / 5}em`,
                            }}
                          ></td>
                        </tr>
                      )}
                      <tr
                        style={{
                          height: `${(endMinutes - startMinutes) / 5}em`,
                        }}
                      >
                        <td>
                          <div>
                            <div className={styles["schedule-start"]}>
                              {start}
                            </div>
                            <div className={styles["schedule-end"]}>{end}</div>
                          </div>
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={
                              {
                                guests: faUsers,
                                free: faComments,
                                special: faStar,
                              }[type]
                            }
                            className={styles["attached-icon"]}
                          />
                          {title instanceof Array
                            ? title.flatMap((text, i) =>
                                // eslint-disable-next-line react/jsx-key
                                i === 0 ? text : [<wbr />, text]
                              )
                            : title}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          ))}
        </div>
      </div>
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
