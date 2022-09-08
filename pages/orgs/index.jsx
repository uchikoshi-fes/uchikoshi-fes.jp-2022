// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./index.module.scss";
// others
import fetchOrganizations from "@/components/organizations/fetch";

const CATEGORIES = [
  { id: "exhibition", name: "展示" },
  { id: "cafe", name: "喫茶" },
  { id: "amusement", name: "アミューズメント" },
  { id: "performance", name: "公演" },
  { id: "field", name: "グラウンド" },
  { id: "stand", name: "屋台" },
  { id: "shop", name: "販売" },
];

const AREAS = [
  { id: "main-f1", name: "本館１階" },
  { id: "main-f2", name: "本館２階" },
  { id: "jhs-f1", name: "中学棟１階" },
  { id: "jhs-f2", name: "中学棟２階" },
  { id: "jhs-f3", name: "中学棟３階" },
  { id: "jhs-f4", name: "中学棟４階" },
  { id: "jhs-f5", name: "中学棟５階" },
  { id: "hs-b1", name: "高校棟地下１階" },
  { id: "hs-f1", name: "高校棟１階" },
  { id: "hs-f2", name: "高校棟２階" },
  { id: "hs-f3", name: "高校棟３階" },
  { id: "hs-f4", name: "高校棟４階" },
  { id: "hs-f5", name: "高校棟５階" },
  { id: "library", name: "清話書林" },
  { id: "arena", name: "アリーナ" },
  { id: "hc-a", name: "ハンドボールコートＡ" },
  { id: "field", name: "グラウンド" },
  { id: "", name: "その他" },
];

const Organizations = ({ organizations }) => {
  const [categoryId, setCategoryId] = React.useState(CATEGORIES[0].id);

  return (
    <>
      <NextSeo title="団体一覧" openGraph={{ title: "参加団体一覧" }} />
      <article className={styles.orgs}>
        <h1>参加団体一覧</h1>
        <div className={styles["organizations-window"]}>
          <div>
            <ul className={styles.categories}>
              {CATEGORIES.map(({ id, name }) => (
                <li
                  className={`${styles[`category-${id}`]} ${
                    id == categoryId ? styles.active : ""
                  }`}
                  key={id}
                >
                  <button onClick={() => setCategoryId(id)}>{name}</button>
                </li>
              ))}
            </ul>
            <ul className={styles.organizations}>
              {organizations
                .filter((org) => org.categoryId === categoryId)
                .map(({ id, title, areaId, room, name }) => {
                  const area = AREAS.find(({ id }) => id === areaId);
                  return (
                    <li key={id}>
                      <Link href={`/orgs/${id}`}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.area}>{area?.name}</div>
                        <div className={styles.room}>{room}</div>
                        <div className={styles.name}>{name || title}</div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

const getStaticProps = async () => {
  return { props: { organizations: await fetchOrganizations() } };
};

export { CATEGORIES, AREAS, getStaticProps };
export default Organizations;
