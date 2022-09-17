// SPDX-License-Identifier: CC-BY-NC-4.0

// framer-motion
import { motion } from "framer-motion";
// components
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./reserve.module.scss";
// icons
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "../base/image";

const Reserve = () => {
  return (
    <section className={styles.reserve}>
      <h2 className={styles["reserve-title"]}>事前予約について</h2>
      <motion.div
        className={styles["reserve-content"]}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <p>
          文化祭に来場する際は、事前に予約が必要です。
          予約は抽選で受け付けております。
          <br />
          予約に関しては、以下のページをご覧ください。
        </p>
        <Link href="/reserve" className={styles["reserve-link"]}>
          来場申し込みページ
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Reserve;
