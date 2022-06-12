// SPDX-License-Identifier: MIT

// next
import React from "react";
// styles
import styles from "./countdown.module.scss";

export const FES_FIRST_DAY = 1663426800000; // 2022/09/18
export const FES_START = FES_FIRST_DAY + 9 * 3600000; // 09:00
export const FES_END = FES_FIRST_DAY + 86400000 + 18 * 3600000; // 18:00

const Remaining = () => {
  const [now, setNow] = React.useState();
  React.useEffect(() => {
    setInterval(() => setNow(Date.now()), 1000);
  }, []);

  if (now === undefined) {
    setTimeout(() => setNow(Date.now()), 0);
    return <></>;
  } else
    return (
      <>
        あと
        <span className={styles.number}>
          {1 + Math.floor((FES_FIRST_DAY - now) / 86400000)}
        </span>
        日！
      </>
    );
};

const Countdown = () => {
  return (
    <div className={styles.countdown}>
      <div>
        文化祭開幕まで、
        <div className={styles.remaining} suppressHydrationWarning>
          <Remaining />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
