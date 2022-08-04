// SPDX-License-Identifier: MIT

// react
import React from "react";
// hooks
import useClient from "@/hooks/client";
// styles
import styles from "./countdown.module.scss";

const FES_FIRST_DAY = 1663426800000; // 2022/09/18
const FES_START = FES_FIRST_DAY + 9 * 3600000; // 09:00
const FES_END = FES_FIRST_DAY + 86400000 + 18 * 3600000; // 18:00

const padZero = (padded) => padded.toString().padStart(2, "0");

const Counter = ({ unit, children }) => {
  return (
    <>
      <span className={styles.number}>{children}</span>
      {unit}
    </>
  );
};

const Remaining = ({ now }) => {
  const remaining = {
    // 残り日数だけは開始日の 00:00 を基準にして切り上げる
    days: Math.ceil((FES_FIRST_DAY - now) / 86400000),
    hours: Math.floor((FES_START - now) / 3600000),
    minutes: Math.floor((FES_START - now) / 60000),
    seconds: Math.floor((FES_START - now) / 1000),
  };

  return (
    <>
      <div className={styles.left}>文化祭開幕まで、</div>
      あと
      {remaining.hours > 100 ? (
        <Counter unit="日">{remaining.days}</Counter>
      ) : remaining.minutes > 100 ? (
        <>
          <Counter unit="時間">{padZero(remaining.hours)}</Counter>
          <Counter unit="分">{padZero(remaining.minutes % 60)}</Counter>
        </>
      ) : remaining.seconds > 100 ? (
        <>
          <Counter unit="分">{padZero(remaining.minutes)}</Counter>
          <Counter unit="秒">{padZero(remaining.seconds % 60)}</Counter>
        </>
      ) : (
        <Counter unit="秒">{padZero(remaining.seconds)}</Counter>
      )}
      ！
    </>
  );
};

const Countdown = () => {
  const isClient = useClient();
  const [now, setNow] = React.useState(Date.now());
  const [intervalId, setIntervalId] = React.useState();
  React.useEffect(() => {
    clearInterval(intervalId);
    if (!isClient) return;
    // TODO: FES_START に近づいたら感覚を狭くする
    setIntervalId(
      setInterval(() => {
        setNow(Date.now());
      }, 10)
    );
  }, [isClient]);

  return (
    <div className={styles.countdown}>
      <div>
        {!isClient ? (
          <>(読込中...)</>
        ) : now < FES_START ? (
          <Remaining now={now + 86400000} />
        ) : (
          <>文化祭始まったよ！</>
        )}
      </div>
    </div>
  );
};

export { FES_FIRST_DAY, FES_START, FES_END };
export default Countdown;
