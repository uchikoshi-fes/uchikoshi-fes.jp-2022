// SPDX-License-Identifier: MIT

// react
import React from "react";
// hooks
import useClient from "@/hooks/client";
// components
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
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
// config
import { SCHEDULE } from "./asano-radio-schedule.js";

const TZ = 9 * 3600000;

const timeStrToMinutes = (timeString) => {
  const [hour, minute] = timeString.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
};

const joinElement = (array, separator) =>
  array.map((value, index) => (
    <React.Fragment key={`${index}-${value}`}>
      {index !== 0 && separator}
      {value}
    </React.Fragment>
  ));

const Live = ({ channelId }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div className={styles.live} ref={ref}>
          {inView && (
            <ReactPlayer
              url={`https://www.youtube.com/embed/live_stream?channel=${channelId}`}
              width="100%"
              height="100%"
              controls
            />
          )}
        </div>
      )}
    </InView>
  );
};

const ScheduleTable = ({ title, date, programs, now }) => {
  const isToday =
    new Date(now).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }) === date;
  const nowMinutes = ((now + TZ) / 60000) % 1440;

  return (
    <table className={styles["schedule-table"]}>
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
        {programs.map(({ title, hover, type, start, end }, index) => {
          const prevMinutes = timeStrToMinutes(
            programs[index - 1]?.end ?? start
          );
          const startMinutes = timeStrToMinutes(start);
          const endMinutes = timeStrToMinutes(end);
          return (
            <React.Fragment key={`${title}-${start}`}>
              {startMinutes !== prevMinutes && (
                // 休憩時間の空白
                <tr
                  className={
                    isToday &&
                    prevMinutes <= nowMinutes &&
                    startMinutes > nowMinutes
                      ? styles["schedule-on-air"]
                      : ""
                  }
                >
                  <td
                    colSpan="2"
                    style={{
                      height: `${(startMinutes - prevMinutes) / 5}em`,
                    }}
                  ></td>
                </tr>
              )}
              <tr
                className={
                  isToday &&
                  startMinutes <= nowMinutes &&
                  endMinutes > nowMinutes
                    ? styles["schedule-on-air"]
                    : ""
                }
                style={{
                  height: `${(endMinutes - startMinutes) / 5}em`,
                }}
              >
                {/* 時間 */}
                <td>
                  <div>
                    <div className={styles["schedule-start"]}>{start}</div>
                    <div className={styles["schedule-end"]}>{end}</div>
                  </div>
                </td>
                {/* 番組 */}
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
                  <span>
                    <span>
                      {
                        // 非ホバー時
                        title instanceof Array
                          ? joinElement(title, <wbr />)
                          : title
                      }
                    </span>
                    <span>
                      {
                        // ホバー時
                        ((hover) =>
                          hover instanceof Array
                            ? joinElement(hover, <wbr />)
                            : hover)(hover ?? title)
                      }
                    </span>
                  </span>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

const Schedule = () => {
  const isClient = useClient();
  const [now, setNow] = React.useState(Date.now());
  const [intervalId, setIntervalId] = React.useState(null);
  React.useEffect(() => {
    clearInterval(intervalId);
    if (!isClient) return;
    setIntervalId(
      setInterval(() => {
        setNow(Date.now());
      }, 1000)
    );
  }, [isClient]);

  return (
    <article className={styles.schedule}>
      <h3>番組表 (暫定版)</h3>
      <div>
        <div>
          {SCHEDULE.map(({ title, date, programs }) => (
            <ScheduleTable
              title={title}
              date={date}
              programs={programs}
              now={now}
              key={title}
            />
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
        <Live channelId="UC8gGRNYCfqQ2vkPEGwFnr8w" />
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

export default AsanoRadio;
