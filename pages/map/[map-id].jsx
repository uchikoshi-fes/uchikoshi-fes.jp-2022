// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import React from "react";
// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./map.module.scss";
// config
import { MAPS } from "@/components/map";
// others
import util from "util";
import fetchImageSize from "image-size";

const sizeOf = util.promisify(fetchImageSize);

const SchoolMap = ({ id, name, alt, maps, orgs, texts, image }) => {
  return (
    <>
      <NextSeo title={name} openGraph={{ title: name }} />
      <article className={styles["school-map"]}>
        <h1>{name}</h1>
        <p>校内マップは制作中です。バージョンアップをお待ちください。</p>
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
              {maps.map((map) => (
                <Link
                  href={`/map/${map.id === "asano" ? "" : map.id}`}
                  style={{ top: `${map.y}%`, left: `${map.x}%` }}
                  className={styles["map-button"]}
                  key={`${map.x},${map.y}`}
                >
                  {MAPS.find(({ id }) => id === map.id).name}
                </Link>
              ))}
              {texts.map((text) => (
                <span
                  style={{ top: `${text.y}%`, left: `${text.x}%` }}
                  className={styles["map-button"]}
                  key={`${text.x},${text.y}`}
                >
                  {text.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <article>
          <h2>校内マップ一覧</h2>
          <ul>
            {MAPS.map((map) => (
              <li key={map.id}>
                {map.id === id ? (
                  <span
                    className={styles.current}
                  >{`${map.name} \u2190 現在地`}</span>
                ) : (
                  <Link href={`/map/${map.id === "asano" ? "" : map.id}`}>
                    {map.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </article>
      </article>
    </>
  );
};

const getStaticProps = async ({ params }) => {
  const image = await sizeOf(`public/map/${params["map-id"]}.png`).catch(
    () => null
  );
  return {
    props: { ...MAPS.find(({ id }) => id === params["map-id"]), image },
  };
};

const getStaticPaths = async () => {
  return {
    paths: MAPS.map(({ id }) => ({ params: { "map-id": id } })),
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default SchoolMap;
