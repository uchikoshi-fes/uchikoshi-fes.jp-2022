// SPDX-License-Identifier: MIT

// react
import React from "react";
// next
import dynamic from "next/dynamic";
// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./organization.module.scss";
// config
import { CATEGORIES, AREAS } from "./index";
import fetchOrganizations from "@/components/organizations/fetch";

const Organization = ({
  id,
  categoryId,
  title,
  areaId,
  room,
  name,
  url,
  twitter,
  Description,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{ title: `参加団体「${title}」by ${name}` }}
      />
      <article className={styles.organization}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.category}>
          <span className={styles.label}>カテゴリー: </span>
          <span className={styles.value}>
            {CATEGORIES.find(({ id }) => id === categoryId).name}
          </span>
        </div>
        <div className={styles.area}>
          <span className={styles.label}>場所: </span>
          <span className={styles.value}>
            {AREAS.find(({ id }) => id === areaId).name}
            {room && <> / {room}</>}
          </span>
        </div>
        <div className={styles.name}>
          <span className={styles.label}>団体名: </span>
          <span className={styles.value}>{name}</span>
        </div>
        {url && (
          <div className={styles.url}>
            <span className={styles.label}>Web サイト</span>
            <span className={styles.value}>
              <Link href={url}>{url}</Link>
            </span>
          </div>
        )}
        {twitter && (
          <div className={styles.twitter}>
            <span className={styles.label}>Twitter: </span>
            <span className={styles.value}>
              <Link href={`https://twitter.com/${twitter}`}>@{twitter}</Link>
            </span>
          </div>
        )}
        <pre>{/*<Description />*/}</pre>
      </article>
    </>
  );
};

const getStaticProps = async ({ params }) => {
  const mdxModule = await import(
    `@/components/organizations/${params["org-id"]}.mdx`
  );
  return {
    props: {
      id: params["org-id"],
      ...mdxModule.META,
    },
  };
};

const getStaticPaths = async () => {
  return {
    paths: (await fetchOrganizations()).map((org) => ({
      params: { "org-id": org.id },
    })),
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default Organization;
