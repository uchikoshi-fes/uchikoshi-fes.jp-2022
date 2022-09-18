// SPDX-License-Identifier: MIT

// react
import React from "react";
// framer-motion
import { motion } from "framer-motion";
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
      <span className={styles.enhance} data-testid={`counter-${unit}`}>
        {children}
      </span>
      <span className={styles.small}>{unit}</span>
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
  React.useEffect(
    () => {
      if (!isClient) return;
      const intervalId = setInterval(() => {
        setNow(Date.now());
        // 残りが 100 秒以内になったら 250ms で更新、それ以外は 1000ms で更新
        if (FES_TIMES.some((time) => time.start - now < 100000)) {
          if (intervalMs > 250) setIntervalMs(250);
        } else {
          if (intervalMs > 1000) setIntervalMs(1000);
        }
      }, intervalMs);
      return () => clearInterval(intervalId);
    },
    // now が変わっても更新する必要はないので、警告を出さない
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isClient, intervalMs]
  );

  return (
    <motion.div
      className={styles.countdown}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      {!isClient ? (
        <>(読込中...)</>
      ) : (
        (() => {
          const fes = FES_TIMES.find((fes) => now <= fes.end);
          // 文化祭終了後
          if (!fes) {
            return (
              <div>
                2022 年度の文化祭は
                <br />
                <span className={styles.enhance}>終了</span>
                <br />
                しました
              </div>
            );
          }
          // 文化祭開催中
          if (now > fes.start) {
            return (
              <div className={styles.opening}>
                <div className={styles.left}>{fes.name}</div>
                <span className={styles.enhance}>開催中</span>
              </div>
            );
          }
          // 文化祭開始前
          return (
            <div>
              <div className={styles.left}>{fes.name}開幕まで</div>
              <span className={styles.small}>あと</span>
              <Remaining start={fes.start} now={now} />
              <span className={styles.small}>！</span>
            </div>
          );
        })()
      )}
    </motion.div>
  );
};

export { FES_TIMES };
export default Countdown;
