// SPDX-License-Identifier: CC-BY-NC-4.0

// styles
import styles from "./slogan.module.scss";

const Slogan = () => {
  return (
    <article className={styles.slogan}>
      <h2>
        スローガン
        <wbr />
        「雲外蒼天」
      </h2>
      <p>
        <>「うんがいそうてん」と読む四字熟語で、</>
        <>困難を努力して克服すれば良いことが待っているという意味です。</>
      </p>
    </article>
  );
};

export default Slogan;
