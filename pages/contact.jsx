// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@/components/base/link";
// styles
import styles from "./contact.module.scss";
// icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const E_MAIL_ADDRESS = "uchikoshi-support@asano.ed.jp";

const EMail = ({ address = E_MAIL_ADDRESS, subject = "お問い合わせ" }) => {
  return (
    <Link href={`mailto:${address}?subject=${subject}`}>
      <FontAwesomeIcon icon={faEnvelope} />
      <> {address}</>
    </Link>
  );
};

const Contact = () => {
  return (
    <>
      <NextSeo title="お問い合わせ" openGraph={{ title: "お問い合わせ" }} />
      <article className={styles.contact}>
        <h1>お問い合わせ</h1>
        <h2>打越祭</h2>
        <p>
          <EMail />
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

export { E_MAIL_ADDRESS, EMail };
export default Contact;
