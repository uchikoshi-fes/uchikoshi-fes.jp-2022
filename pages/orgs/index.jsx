// SPDX-License-Identifier: MIT

// react
import React from "react";
// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./index.module.scss";
// confif
import { CATEGORIES, ORGANIZATIONS } from "./organizations";

const Organizations = () => {
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
            {ORGANIZATIONS.filter(
              ({ category }) => category === categoryId
            ).map(({ id, name }) => (
              <li key={id}>
                <Link href={id}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Organizations;
