// SPDX-License-Identifier: CC-BY-NC-4.0

/*
 * 環境変数
 * - NEXT_PUBLIC_RESERVE_URL: 予約フォームの URL
 */

// react
import React from "react";
// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./reserve.module.scss";

const NOTES = ["注意事項 1", "注意事項 2", "注意事項 3"];

const Reserve = () => {
  const [checked, setChecked] = React.useState(NOTES.map(() => false));

  return (
    <>
      <NextSeo title="事前予約" openGraph={{ title: "事前予約" }} />
      <article className={styles.reserve}>
        <h1>事前予約</h1>
        {!process.env.NEXT_PUBLIC_APPLY_URL && (
          <article className={styles.warning}>
            <h2>現在予約は受け付けておりません</h2>
            <p>予約は 2022/09/03 日から受け付け開始予定です。</p>
          </article>
        )}
        <article>
          <h2>注意事項</h2>
          <p>
            予約は、以下の注意事項をよく読んでからお願いします。
            <br />
            予約の際には、以下の注意事項に同意したものとみなします。
          </p>
          {NOTES.map((note, index) => (
            <label className={styles.note} key={index}>
              <input
                type="checkbox"
                value={index}
                checked={checked[index]}
                onChange={(event) => {
                  const newChecked = [...checked];
                  newChecked[index] = event.target.checked;
                  setChecked(newChecked);
                }}
              />
              {note}
            </label>
          ))}
        </article>
        {process.env.NEXT_PUBLIC_RESERVE_URL && (
          <article>
            <h2>予約フォーム</h2>
            <div className={styles["form-link"]}>
              {checked.every((value) => value) ? (
                <div>
                  <Link href={process.env.NEXT_PUBLIC_RESERVE_URL}>
                    予約フォーム
                  </Link>
                </div>
              ) : (
                <div className={styles["please-check"]}>
                  注意事項に同意してください
                </div>
              )}
            </div>
          </article>
        )}
      </article>
    </>
  );
};

export default Reserve;
