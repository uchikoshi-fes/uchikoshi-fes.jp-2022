// SPDX-License-Identifier: MIT

// next
import React from "react";
// styles
import styles from "./countdown.module.scss";

export const FES_FIRST_DAY = 1663426800000; // 2022/09/18
export const FES_START = FES_FIRST_DAY + 9 * 3600000; // 09:00
export const FES_END = FES_FIRST_DAY + 86400000 + 18 * 3600000; // 18:00

const Countdown = () => {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    setTimeout(() => setNow(Date.now()), 1000);
  }, [now]);
  return (
    <div className={styles.countdown}>
      <div>
        文化祭開幕まで、
        <div className={styles.remaining}>
          あと
          <span className={styles.number} suppressHydrationWarning>
            {1 + Math.floor((FES_FIRST_DAY - now) / 86400000)}
          </span>
          日！
        </div>
      </div>
    </div>
  );
};

export default Countdown;
