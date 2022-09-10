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

const SchoolMap = ({ id, name, alt, maps, orgs, texts, mapRatio }) => {
  return (
    <>
      <NextSeo title={name} openGraph={{ title: name }} />
      <article className={styles["school-map"]}>
        <h1>{name}</h1>
        <p>校内マップは制作中です。バージョンアップをお待ちください。</p>
        <div className={styles["map-container"]}>
          <div style={{ aspectRatio: mapRatio }} className={styles.map}>
            <Image
              src={`/map/${id}.png`}
              alt={alt}
              layout="fill"
              objectFit="contain"
            />
            <div className={styles["map-buttons"]}>
              {maps.map((map) => (
                <div
                  style={{ top: `${map.y}%`, left: `${map.x}%` }}
                  key={`${map.x},${map.y}`}
                >
                  <Link href={`/map/${map.id === "asano" ? "" : map.id}`}>
                    {MAPS.find(({ id }) => id === map.id).name}
                  </Link>
                </div>
              ))}
              {texts.map((text) => (
                <div
                  style={{ top: `${text.y}%`, left: `${text.x}%` }}
                  key={`${text.x},${text.y}`}
                >
                  {text.text}
                </div>
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
  const imageSize = await sizeOf(`public/map/${params["map-id"]}.png`);
  return {
    props: {
      ...MAPS.find(({ id }) => id === params["map-id"]),
      mapRatio: imageSize.width / imageSize.height,
    },
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
