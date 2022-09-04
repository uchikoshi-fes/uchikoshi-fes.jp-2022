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

const NOTES = [
  {
    title: "文化祭来場の注意",
    Description: () => (
      <ul>
        <li className={styles.warning}>
          来場には予約申し込みが必要で、抽選制となります。
        </li>
        <li>
          当日の発熱や体調不良、療養期間中の場合はご来場をお控えください。
        </li>
        <li>
          来場の際は当日の朝に検温のうえ、マスク着用での入場をお願いします。
        </li>
        <li>
          来場には抽選結果に記載される内容の提示が必要です。画面の提示または、プリントアウトのご準備をお願いします。
        </li>
      </ul>
    ),
  },
  {
    title: "予約申し込みについて",
    Description: () => (
      <ul>
        <li>
          お申し込み前に
          <span className={styles.warning}>
            「＠asano.ed.jp」と「＠google.com」の両方のドメインのアドレスからメールを受け取れるように確認
          </span>
          をお願いいたします。（キャリアの設定や迷惑メールの設定など）
        </li>
        <li>
          予約フォーム入力、送信直後、登録いただいたアドレスにGoogleフォーム側より「ご記入いただきありがとうございます」のメールが届けば、予約完了となります。
        </li>
        <li>
          抽選結果の連絡は「＠asano.ed.jp」のドメインのアドレスからお知らせします。
        </li>
        <li>
          抽選結果のご連絡は9月13日頃を予定しています。
          <span className={styles.warning}>
            お電話での確認はご遠慮ください。
          </span>
        </li>
        <li>
          キャンセルのお申し出による繰り上げは行う予定です。そのため、追加の予約受付は行いません。
        </li>
        <li>アドレスを変えての複数のお申込みなどはご遠慮ください。</li>
        <li>当選した場合でも他の人へ譲渡することはできません。</li>
      </ul>
    ),
  },
];

const Reserve = () => {
  const [checked, setChecked] = React.useState(NOTES.map(() => false));

  return (
    <>
      <NextSeo title="事前予約" openGraph={{ title: "事前予約" }} />
      <article className={styles.reserve}>
        <h1>事前予約</h1>
        {!process.env.NEXT_PUBLIC_RESERVE_URL && (
          <article>
            <h2 className={styles.warning}>現在予約は受け付けておりません</h2>
            <p>2022/09/05 より予約を受け付けます。</p>
          </article>
        )}
        <p>
          2022年9月18,19日に第43回打越祭(第２部)文化祭を開催します。
          <br />
          新型コロナウイルス感染症拡大防止のため、<></>
          本年度も「来場者数の制限」を行っての開催となります。
          <br />
          文化祭に来場するには、下記の予約フォームよりお申し込みいただき、
          <></>
          抽選に参加していただく必要があります。<></>
          申し込みに関する注意事項をよく読んでからご回答いただくよう、<></>
          お願い申し上げます。
        </p>
        <article>
          <h2>注意事項</h2>
          {NOTES.map(({ title, Description }, index) => (
            <>
              <label className={styles.note} key={index}>
                <input
                  type="checkbox"
                  value={index}
                  checked={checked[index]}
                  className={styles.warning}
                  onChange={(event) => {
                    const newChecked = [...checked];
                    newChecked[index] = event.target.checked;
                    setChecked(newChecked);
                  }}
                />
                {title}
              </label>
              <Description />
            </>
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
