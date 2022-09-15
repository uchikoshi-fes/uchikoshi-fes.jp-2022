// SPDX-License-Identifier: MIT

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./index.module.scss";

const Articles = ({ articles }) => {
  return (
    <>
      <NextSeo title="記事一覧" openGraph={{ title: "記事" }} />
      <article className={styles.articles}>
        <h1>記事一覧</h1>
        <ul className={styles["articles-list"]}>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                <h2>{article.title}</h2>
                <div className={styles.description}>{article.description}</div>
                <div className={styles.date}>
                  最終更新 {new Date(article.date).toLocaleDateString("ja-JP")}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

const getStaticProps = async () => {
  const articles = [
    {
      id: "a",
      title: "タイトル A",
      description:
        "A の説明、A の説明、A の説明、A の説明、A の説明、A の説明、A の説明、A の説明",
      date: new Date("2021-01-02").getTime(),
    },
    {
      id: "b",
      title: "タイトル B",
      description:
        "B の説明、B の説明、B の説明、B の説明、B の説明、B の説明、B の説明、B の説明",
      date: new Date("2021-01-01").getTime(),
    },
  ].sort((a, b) => b.date - a.date);
  for (const { id, title, description } of articles) {
    if (description.length > 50) {
      console.warn(
        `記事「${title}」(${id}) の description が ` +
          `${description.length} 文字あります。50 文字以下にしてください。`
      );
    }
  }
  return { props: { articles } };
};

export { getStaticProps };
export default Articles;
