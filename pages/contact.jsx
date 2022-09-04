// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./contact.module.scss";
// icons
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <NextSeo title="お問い合わせ" openGraph={{ title: "お問い合わせ" }} />
      <article className={styles.contact}>
        <h1>お問い合わせ</h1>
        <h2>浅野学園</h2>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 045-421-3281
        </p>
        <h2>本サイト</h2>
        <p>
          <Link href="https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022/issues">
            <FontAwesomeIcon icon={faGithub} />
            <> GitHub Issues (GitHub アカウントが必要です)</>
          </Link>
        </p>
      </article>
    </>
  );
};

export default Contact;
