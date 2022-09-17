// SPDX-License-Identifier: CC-BY-NC-4.0

// react
import { useRef } from "react";
// framer-motion
import { motion, useInView } from "framer-motion";
// styles
import styles from "./slogan.module.scss";

const Slogan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className={`${isInView ? styles["slogan-inview"] : ""} ${styles.slogan}`}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <h6 className={styles["small-title"]}>スローガン</h6>
        <h2 className={styles["large-title"]}>雲外蒼天</h2>
        <p>
          <>「うんがいそうてん」と読む四字熟語で、</>
          <>困難を努力して克服すれば良いことが待っているという意味です。</>
        </p>
      </motion.div>
    </section>
  );
};

export default Slogan;
