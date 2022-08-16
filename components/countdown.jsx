// SPDX-License-Identifier: MIT

// react
import React from "react";
// hooks
import useClient from "@/hooks/client";
// styles
import styles from "./countdown.module.scss";

const TZ = 9 * 3600000;

const FES_TIMES = [
  // 2022/09/18 9:00~18:00
  {
    name: "文化祭１日目",
    start: Date.UTC(2022, 8, 18, 9, 0) - TZ,
    end: Date.UTC(2022, 8, 18, 18, 0) - TZ,
  },
  // 2022/09/19 9:00~18:00
  {
    name: "文化祭２日目",
    start: Date.UTC(2022, 8, 19, 9, 0) - TZ,
    end: Date.UTC(2022, 8, 19, 18, 0) - TZ,
  },
];

const padZero = (padded) => padded.toString().padStart(2, "0");

const Counter = ({ unit, children }) => {
  return (
    <>
      <span className={styles.number}>{children}</span>
      {unit}
    </>
  );
};

const Remaining = ({ start, now }) => {
  const remaining = {
    hours: Math.floor((start - now) / 3600000),
    minutes: Math.floor((start - now) / 60000),
    seconds: Math.floor((start - now) / 1000),
  };

  // 残り 100 時間以内でない場合は日数
  if (remaining.hours >= 100) {
    return (
      <Counter unit="日">
        {Math.ceil((new Date(start).setHours(0, 0, 0, 0) - now) / 86400000)}
      </Counter>
    );
  }

  // 残り 100 分以内でない場合は時間と分
  if (remaining.minutes >= 100) {
    return (
      <>
        <Counter unit="時間">{padZero(remaining.hours)}</Counter>
        <Counter unit="分">{padZero(remaining.minutes % 60)}</Counter>
      </>
    );
  }

  // 残り 100 秒以内でない場合は時間と分と秒
  if (remaining.seconds >= 100) {
    return (
      <>
        <Counter unit="分">{padZero(remaining.minutes)}</Counter>
        <Counter unit="秒">{padZero(remaining.seconds % 60)}</Counter>
      </>
    );
  }

  // 残り 100 秒以内の場合は秒
  return <Counter unit="秒">{padZero(remaining.seconds)}</Counter>;
};

const Countdown = () => {
  const isClient = useClient();
  const [now, setNow] = React.useState(Date.now());
  const [intervalMs, setIntervalMs] = React.useState(1000);
  const [intervalId, setIntervalId] = React.useState();
  React.useEffect(
    () => {
      clearInterval(intervalId);
      if (!isClient) return;
      setIntervalId(
        setInterval(() => {
          setNow(Date.now());
          // 残りが 100 秒以内になったら 250ms で更新、それ以外は 1000ms で更新
          if (FES_TIMES.some((time) => time.start - now < 100000)) {
            if (intervalMs > 250) setIntervalMs(250);
          } else {
            if (intervalMs > 1000) setIntervalMs(1000);
          }
        }, intervalMs)
      );
    },
    // intervalId と now が変わっても更新する必要はないので、警告を出さない
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isClient, intervalMs]
  );

  return (
    <div className={styles.countdown}>
      <div>
        {!isClient ? (
          <>(読込中...)</>
        ) : (
          (() => {
            const fes = FES_TIMES.find((fes) => now <= fes.end);
            // 文化祭終了後
            if (!fes) return <>2022 年度の文化祭は終了しました</>;
            // 文化祭開催中
            if (now > fes.start) return <>{fes.name}開催中</>;
            // 文化祭開始前
            return (
              <>
                <div className={styles.left}>{fes.name}開幕まで</div>
                あと
                <Remaining start={fes.start} now={now} />！
              </>
            );
          })()
        )}
      </div>
    </div>
  );
};

export { FES_TIMES };
export default Countdown;
