// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import Link from "@/components/base/link";
// styles
import styles from "./asano-radio.module.scss";

const Schedule = () => {
  return (
    <table className={styles.schedule}>
      <thead>
        <tr>
          <th colSpan="1">番組表</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(準備中)</td>
        </tr>
      </tbody>
    </table>
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

export default AsanoRadio;
