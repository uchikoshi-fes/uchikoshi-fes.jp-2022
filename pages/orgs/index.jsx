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
  { id: "stage", name: "ステージ" },
  { id: "field", name: "グラウンド" },
  { id: "band", name: "バンド" },
  { id: "stand", name: "屋台" },
  { id: "shop", name: "販売" },
];

const AREAS = [
  { id: "hkF1", name: "本館１階" },
  { id: "hkF2", name: "本館２階" },
  { id: "cgtF1", name: "中学棟１階" },
  { id: "cgtF2", name: "中学棟２階" },
  { id: "cgtF3", name: "中学棟３階" },
  { id: "cgtF4", name: "中学棟４階" },
  { id: "cgtF5", name: "中学棟５階" },
  { id: "kktB1", name: "高校棟地下１階" },
  { id: "kktF1", name: "高校棟１階" },
  { id: "kktF2", name: "高校棟２階" },
  { id: "kktF3", name: "高校棟３階" },
  { id: "kktF4", name: "高校棟４階" },
  { id: "kktF5", name: "高校棟５階" },
  { id: "arnF1", name: "アリーナ１階" },
  { id: "arnF2", name: "アリーナ２階" },
  { id: "swsr", name: "清話書林" },
  { id: "grnd", name: "グラウンド" },
  { id: "", name: "その他" },
];

const Organizations = ({ organizations }) => {
  const [categoryId, setCategoryId] = React.useState(CATEGORIES[0].id);

  return (
    <>
      <NextSeo title="参加団体一覧" openGraph={{ title: "団体一覧" }} />
      <article className={styles.orgs}>
        <h1>参加団体一覧</h1>
        <div className={styles["organizations-window"]}>
          <ul className={styles.categories}>
            {CATEGORIES.map(({ id, name }) => (
              <li className={id == categoryId ? styles.active : ""} key={id}>
                <button onClick={() => setCategoryId(id)}>{name}</button>
              </li>
            ))}
          </ul>
          <ul className={styles.organizations}>
            {organizations
              .filter((org) => org.categoryId === categoryId)
              .map(({ id, title, areaId, room, name, thumbnail }) => (
                <li key={id}>
                  <Link href={`/orgs/${id}`}>
                    {title}
                    <br />
                    {AREAS.find(({ id }) => id === areaId).name}
                    <br />
                    {room}
                    <br />
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
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
