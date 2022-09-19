// SPDX-License-Identifier: CC-BY-NC-4.0

// framer-motion
import { motion } from "framer-motion";
// components
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./access.module.scss";
// icons
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GoogleMaps = () => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <div className={styles.map} ref={ref}>
          {inView && (
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6497.057482057193!2d139.658201!3d35.491202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185dd0cec4b9f1%3A0x61ef37511aa6ddb0!2z5rWF6YeO5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1654689474523!5m2!1sja!2sjp`}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      )}
    </InView>
  );
};

const Access = () => {
  return (
    <section className={styles.access}>
      <h2 className={styles["access-title"]}>アクセス</h2>
      <motion.div
        className={styles["access-content-wrap"]}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <GoogleMaps />
        <div className={styles["access-content"]}>
          <ul>
            <li>
              <h3 className={styles["access-content-title"]}>
                電車でお越しの方
              </h3>
              <p>JR京浜東北線「新子安駅」から 徒歩8分</p>
              <p>京急本線「京急新子安駅」から 徒歩6分</p>
              <p>京急本線「生麦駅」から 徒歩11分</p>
            </li>
            <li>
              <h3 className={styles["access-content-title"]}>
                路線バスでお越しの方
              </h3>
              <p>３８系統「浅野学園前バス停」から 徒歩1分</p>
            </li>
            <Link
              className={styles["route-button"]}
              href="https://maps.apple.com/maps?dirflg=r&daddr=35.489455621313176,139.6582380936508"
              noIcon={true}
            >
              現在地からのルート
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Access;
