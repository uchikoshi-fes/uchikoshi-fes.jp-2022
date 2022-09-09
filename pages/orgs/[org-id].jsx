// SPDX-License-Identifier: MIT

// react
import React from "react";
// next
import dynamic from "next/dynamic";
// components
import { NextSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import styles from "./organization.module.scss";
// icons
import {
  faTag,
  faLocationDot,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// config
import { CATEGORIES, AREAS } from "./index";
import {
  fetchOrganizations,
  fetchOrganization,
  fetchOrganizationDescription,
} from "@/components/organizations/fetch";

const Organization = ({
  id,
  title,
  categoryId,
  areaId,
  room,
  name,
  url,
  twitter,
  logo,
}) => {
  const Description = dynamic(() => fetchOrganizationDescription(id), {
    loading: () => (
      <div className={styles["description-loading"]}>(読込中...)</div>
    ),
  });

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{ title: `参加団体「${title}」${name ? `by ${name}` : ""}` }}
      />
      <article className={styles.organization}>
        <Image
          src={`${id}/${logo}`}
          alt={title}
          title={`${title}ロゴ`}
          layout="responsive"
          height={300}
          width={300}
          className={styles.logo}
        />
        <h1>{title}</h1>
        <div className={styles.meta}>
          <div>
            <FontAwesomeIcon icon={faTag} />
            <Link href={`/orgs/?category=${categoryId}`}>
              {CATEGORIES.find(({ id }) => id === categoryId)?.name}
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <Link href={`/map/${areaId}`}>
              {AREAS.find(({ id }) => id === areaId)?.name}
            </Link>
            {room && <div className={styles.room}>{room}</div>}
          </div>
          <div>
            <FontAwesomeIcon icon={faPeopleGroup} />
            {url ? <Link href={url}>{name || "有志"}</Link> : name || "有志"}
          </div>
          {twitter && (
            <div>
              <FontAwesomeIcon icon={faTwitter} />
              <Link href={`https://twitter.com/${twitter}`}>@{twitter}</Link>
            </div>
          )}
        </div>
        <div className={styles.description}>
          <MDXProvider
            components={{
              p: ({ children }) => (
                <pre className={styles.paragraph}>{children}</pre>
              ),
              a: Link,
              img: ({
                title,
                src,
                alt = "",
                layout = "intrinsic",
                objectFit = "contain",
                height = 450,
                width = 600,
                ...props
              }) => (
                <div className={styles.image}>
                  <Image
                    title={title}
                    src={src}
                    alt={alt}
                    layout={layout}
                    objectFit={objectFit}
                    height={height}
                    width={width}
                    {...props}
                  />
                  <div>{title}</div>
                </div>
              ),
            }}
          >
            <Description />
          </MDXProvider>
        </div>
      </article>
    </>
  );
};

const getStaticProps = async ({ params }) => {
  return { props: await fetchOrganization(params["org-id"]) };
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
