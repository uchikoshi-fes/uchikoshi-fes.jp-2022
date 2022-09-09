// SPDX-License-Identifier: CC-BY-NC-4.0

// framer-motion
import { motion } from "framer-motion";
// styles
import styles from "./slogan.module.scss";

const Slogan = () => {
  return (
    <motion.section
      className={styles.slogan}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div>
        <h6 className={styles["small-title"]}>スローガン</h6>
        <h2 className={styles["large-title"]}>雲外蒼天</h2>
        <p>
          <>「うんがいそうてん」と読む四字熟語で、</>
          <>困難を努力して克服すれば良いことが待っているという意味です。</>
        </p>
      </div>
    </motion.section>
  );
};

export default Slogan;
