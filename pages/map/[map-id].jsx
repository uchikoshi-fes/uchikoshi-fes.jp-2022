// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./map.module.scss";
// config
import { MAPS } from "@/components/map";

const SchoolMap = ({ id, name, alt }) => {
  return (
    <>
      <NextSeo title={name} openGraph={{ title: name }} />
      <article className={styles["school-map"]}>
        <h1>{name}</h1>
        <div className={styles["map-container"]}>
          <div className={styles.map}>
            <Image
              src={`/map/${id}.png`}
              alt={alt}
              layout="fill"
              objectFit="contain"
            />
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
  return { props: { ...MAPS.find(({ id }) => id === params["map-id"]) } };
};

const getStaticPaths = async () => {
  return {
    paths: MAPS.map(({ id }) => ({ params: { "map-id": id } })),
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default SchoolMap;
