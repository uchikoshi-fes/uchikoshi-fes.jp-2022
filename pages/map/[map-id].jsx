// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// components
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./map.module.scss";
// config
import { MAPS } from "@/components/map";
import { CATEGORIES } from "@/pages/orgs/index";
// icons
import {
  faLocationDot,
  faTag,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
// others
import util from "util";
import fetchImageSize from "image-size";
import { fetchOrganization } from "@/components/organizations/fetch";

const sizeOf = util.promisify(fetchImageSize);

const SchoolMap = ({ id, name, alt, maps, orgs, texts, image }) => {
  return (
    <>
      <NextSeo title={name} openGraph={{ title: name }} />
      <article className={styles["school-map"]}>
        <h1>{name}</h1>
        <div className={styles["map-container"]}>
          <div
            style={
              image
                ? { aspectRatio: image.width / image.height }
                : { minHeight: "100px" }
            }
            className={styles.map}
          >
            {image ? (
              <Image
                src={`/map/${id}.png`}
                alt={alt}
                layout="fill"
                objectFit="contain"
              />
            ) : (
              alt
            )}
            <div>
              {texts.map((text) => (
                <span
                  style={{ top: `${text.y}%`, left: `${text.x}%` }}
                  className={styles["map-button"]}
                  key={`${text.text}(${text.x},${text.y})`}
                >
                  {text.text}
                </span>
              ))}
              {orgs.map((org) => (
                <Link
                  href={`/orgs/${org.id}`}
                  style={{ top: `${org.y}%`, left: `${org.x}%` }}
                  className={styles["map-button"]}
                  key={`${org.id}(${org.x},${org.y})`}
                >
                  {org.logo && (
                    <div className={styles["map-button-logo"]}>
                      <Image
                        src={`/orgs/${org.id}/${org.logo}`}
                        alt=""
                        layout="responsive"
                        height={100}
                        width={100}
                        objectFit="contain"
                      />
                    </div>
                  )}
                  {!org.logoOnly && org.title}
                </Link>
              ))}
              {maps.map((map) => (
                <Link
                  href={`/map/${map.id === "asano" ? "" : map.id}`}
                  style={{ top: `${map.y}%`, left: `${map.x}%` }}
                  className={styles["map-button"]}
                  key={`${map.id}(${map.x},${map.y})`}
                >
                  {MAPS.find(({ id }) => id === map.id).name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {orgs.length > 0 && (
          <article>
            <h2>マップ内の団体</h2>
            <ul className={styles.organizations}>
              {orgs
                .filter((org, i) => orgs[i + 1]?.id !== org.id)
                .map((org) => (
                  <li key={org.id}>
                    <div className={styles["org-logo"]}>
                      <Image
                        src={`/orgs/${org.id}/${org.logo}`}
                        alt=""
                        layout="responsive"
                        height={100}
                        width={100}
                        objectFit="contain"
                      />
                    </div>
                    <div className={styles["org-text"]}>
                      <h3 className={styles["org-title"]}>{org.title}</h3>
                      <div className={styles["org-meta"]}>
                        <div>
                          <FontAwesomeIcon icon={faLocationDot} />
                          {org.room}
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faTag} />
                          {
                            CATEGORIES.find(({ id }) => id === org.categoryId)
                              .name
                          }
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faPeopleGroup} />
                          {org.name}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/orgs/${org.id}`}
                      className={styles["org-details"]}
                    >
                      詳細を見る
                    </Link>
                  </li>
                ))}
            </ul>
          </article>
        )}
      </article>
    </>
  );
};

const getStaticProps = async ({ params }) => {
  const props = MAPS.find(({ id }) => id === params["map-id"]);
  await Promise.all([
    (async () => {
      props.image = await sizeOf(`public/map/${params["map-id"]}.png`).catch(
        () => null
      );
    })(),
    ...props.orgs.map(async (org) => {
      Object.assign(org, await fetchOrganization(org.id));
    }),
  ]);
  return { props };
};

const getStaticPaths = async () => {
  return {
    paths: MAPS.map(({ id }) => ({ params: { "map-id": id } })),
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default SchoolMap;
