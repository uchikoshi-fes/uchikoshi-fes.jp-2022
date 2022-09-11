// SPDX-License-Identifier: CC-BY-NC-4.0

/*
 * 環境変数
 * - NEXT_PUBLIC_RESERVE_URL: 申し込みフォームの URL
 */

// react
import React from "react";
// hooks
import useClient from "@/hooks/client";
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
          来場には申し込みが必要で、抽選制となります。
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
        <li>
          退場時間は設けておりません。　※退場した後に再入場することはできません。
        </li>
      </ul>
    ),
  },
  {
    title: "申し込みの注意",
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
          フォーム入力、送信直後、登録いただいたアドレスにGoogleフォーム側より「ご記入いただきありがとうございます」のメールが届けば、申し込み完了となります。
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
          キャンセルのお申し出による繰り上げを行う予定です。そのため、追加の申し込み受付は行いません。
        </li>
        <li>アドレスを変えての複数のお申込みなどはご遠慮ください。</li>
        <li>当選した場合でも他の人へ譲渡することはできません。</li>
      </ul>
    ),
  },
];

const Reserve = () => {
  const isClient = useClient();
  const [now, setNow] = React.useState(Date.now());
  const [checked, setChecked] = React.useState(NOTES.map(() => false));
  React.useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [isClient]);

  return (
    <>
      <NextSeo
        title="来場申し込み"
        openGraph={{ title: "来場申し込み (抽選制)" }}
      />
      <article className={styles.reserve}>
        <h1>来場申し込み (抽選制)</h1>
        {!process.env.NEXT_PUBLIC_RESERVE_URL ? (
          <article>
            <h2 className={styles.warning}>
              現在申し込みは受け付けておりません
            </h2>
            <p>2022/09/05 より申し込みを受け付けます。</p>
          </article>
        ) : (
          now >= Date.UTC(2022, 8, 12, 12, 0) - 9 * 3600000 && (
            <article>
              <h2 className={styles.warning}>申し込みは終了しました</h2>
              <p>抽選結果は9月13日頃を予定しています。</p>
            </article>
          )
        )}
        <p>
          2022年9月18,19日に第43回打越祭(第２部)文化祭を開催します。
          <br />
          新型コロナウイルス感染症拡大防止のため、<></>
          本年度も「来場者数の制限」を行っての開催となります。
          <br />
          文化祭に来場するには、下記のフォームよりお申し込みいただき、
          <></>
          抽選に参加していただく必要があります。<></>
          申し込みに関する注意事項をよく読んでからご回答いただくよう、<></>
          お願い申し上げます。
          <br />
          お問い合わせの際は、uchikoshi-support@asano.ed.jp
          までお願いいたします。
        </p>
        <article>
          <h2>注意事項</h2>
          <p>同意の上、チェックを入れてください。</p>
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
            <h2>申し込みフォーム</h2>
            <div className={styles["form-link"]}>
              {checked.every((value) => value) ? (
                <div>
                  <Link href={process.env.NEXT_PUBLIC_RESERVE_URL}>
                    申し込みフォーム
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
