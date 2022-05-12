// components
import NextSeo from "next-seo";
// styles
import styles from "../styles/Index.module.scss";

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={`${styles.title} non-break`}>
            第43回
            <wbr />
            打越祭
            <wbr />
            公式サイト
          </h1>

          <p className={styles.description}>
            浅野学園2022年度文化祭
            <br />
            鋭意制作中！
          </p>
        </main>

        <footer className={styles.footer}>
          Copyright &copy; 2022 浅野学園生徒会
        </footer>
      </div>
    </>
  );
};

export default Index;
