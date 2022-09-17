// SPDX-License-Identifier: MIT

// react
import React from "react";
// hooks
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/client";
// components
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./index.module.scss";
// icons
import {
  faFileContract,
  faUtensils,
  faDice,
  faMicrophone,
  faPersonRunning,
  faBurger,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
// others
import { fetchOrganizations } from "@/components/organizations/fetch";

const CATEGORIES = [
  { id: "exhibition", name: "展示", icon: faFileContract },
  { id: "cafe", name: "喫茶", icon: faUtensils },
  { id: "amusement", name: "アミューズメント", icon: faDice },
  { id: "performance", name: "公演", icon: faMicrophone },
  { id: "field", name: "グラウンド", icon: faPersonRunning },
  { id: "stand", name: "屋台", icon: faBurger },
  { id: "shop", name: "販売", icon: faCartShopping },
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
  const isClient = useClient();
  const router = useRouter();
  const isWide = useMediaQuery({ query: "(min-width: 800px)" });
  const isNarrow = useMediaQuery({ query: "(max-width: 450px)" });
  const [categoryId, setCategoryId] = React.useState(CATEGORIES[0].id);
  const [categorySelected, setCategorySelected] = React.useState(false);
  React.useEffect(() => {
    if (!router.isReady) return;
    if (!categorySelected) {
      if (CATEGORIES.some(({ id }) => id === router.query.category)) {
        setCategoryId(router.query.category);
      }
      setCategorySelected(true);
      return;
    }
    router.replace({ query: { category: categoryId } }, undefined, {
      shallow: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, categoryId]);

  return (
    <>
      <NextSeo title="団体一覧" openGraph={{ title: "参加団体一覧" }} />
      <article className={styles.orgs}>
        <h1>参加団体一覧</h1>
        <p>
          カテゴリーごとにタブが分かれています。<></>
          タブをクリックすると、そのカテゴリーの団体のみが表示されます。
        </p>
        <div className={styles["organizations-window"]}>
          <div>
            <ul className={styles.categories}>
              {CATEGORIES.map(({ id, name, icon }) => {
                const isActive = id === categoryId;
                const isShowFull =
                  !isClient || isWide || (!isNarrow && isActive);
                return (
                  <li
                    className={`${styles[`category-${id}`]} ${
                      isActive ? styles.active : ""
                    }`}
                    key={id}
                  >
                    <button onClick={() => setCategoryId(id)}>
                      <FontAwesomeIcon
                        icon={icon}
                        size="lg"
                        className={isShowFull ? styles["icon-left"] : ""}
                      />
                      {isShowFull && name}
                    </button>
                  </li>
                );
              })}
            </ul>
            {isClient && isNarrow && (
              <div
                className={`${styles["category-narrow"]} ${
                  styles[`category-${categoryId}`]
                }`}
              >
                {CATEGORIES.find(({ id }) => id === categoryId).name}
              </div>
            )}
            <ul
              className={`${styles.organizations} ${
                styles[`category-${categoryId}`]
              }`}
            >
              {organizations
                .filter((org) => org.categoryId === categoryId)
                .map(({ id, title, areaId, room, name, logo }) => {
                  const area = AREAS.find(({ id }) => id === areaId);
                  return (
                    <li key={id}>
                      <Link href={`/orgs/${id}`}>
                        <div className={styles.logo}>
                          <Image
                            src={`/orgs/${id}/${logo}`}
                            alt=""
                            width={80}
                            height={80}
                            objectFit="contain"
                          />
                        </div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles["other-info"]}>
                          <div className={styles.area}>{area?.name}</div>
                          {isClient && !isNarrow && (
                            <>
                              <div className={styles.room}>{room}</div>
                              <div className={styles.name}>{name || title}</div>
                            </>
                          )}
                        </div>
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
