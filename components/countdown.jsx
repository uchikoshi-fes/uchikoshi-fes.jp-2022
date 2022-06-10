// SPDX-License-Identifier: MIT

// next
import React from "react";
// styles
import styles from "./countdown.module.scss";

const Countdown = () => {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    setTimeout(() => setNow(Date.now()), 1000);
  }, [now]);
  return (
    <div className={styles.countdown} suppressHydrationWarning>
      {now}
    </div>
  );
};

export default Countdown;
