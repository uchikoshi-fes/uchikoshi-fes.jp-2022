// SPDX-License-Identifier: MIT

// components
import { NextSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./article-container.module.scss";

const ArticleContainer = ({ children, meta = {} }) => {
  return (
    <>
      <NextSeo
        title={meta.title}
        openGraph={{
          title: `記事「${meta.title ?? "無題"}」`,
          type: "article",
          article: {
            modifiedTime: meta.date,
          },
        }}
      />
      <article className={styles.container}>
        <h1>{meta.title ?? "無題の記事"}</h1>
        {meta.date && (
          <div className={styles.date}>
            最終更新 {new Date(meta.date).toLocaleDateString("ja-JP")}
          </div>
        )}
        <MDXProvider
          components={{
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
            ),
          }}
        >
          {children}
        </MDXProvider>
        <div className={styles.back}>
          <Link href="/articles">記事一覧へ戻る</Link>
        </div>
      </article>
    </>
  );
};

export default ArticleContainer;
