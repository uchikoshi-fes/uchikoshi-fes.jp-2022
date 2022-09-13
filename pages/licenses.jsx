// SPDX-License-Identifier: MIT

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./licenses.module.scss";
// utils
import fs from "fs";
import licenseChecker from "license-checker";
// config
import PACKAGE from "@/package";

const Contributors = ({ contributors }) => {
  return (
    <div>
      <h2>開発貢献者</h2>
      <ul>
        {contributors.map((contributor) => (
          <li key={contributor}>
            <span className={styles.contributor}>{contributor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Libraries = ({ packages }) => {
  return (
    <article>
      <h2>ライブラリ</h2>
      <p>本サイトでは、以下のサードパーティライブラリを使用しています。</p>
      {packages.map((pkg) => {
        return (
          <article key={pkg.name}>
            <h3>
              <Link href={pkg.url}>{pkg.name}</Link>
            </h3>
            <p>
              <>ライセンス: </>
              <span className={styles["license-name"]}>
                {pkg.licenses === "UNKNOWN" ? "不明" : pkg.licenses}
              </span>
            </p>
            {pkg.licenseText && (
              <pre className={styles["license-text"]}>
                <code>{pkg.licenseText}</code>
              </pre>
            )}
          </article>
        );
      })}
    </article>
  );
};

const Licenses = ({ packages, thisPackage }) => {
  return (
    <>
      <NextSeo title="ライセンス" openGraph={{ title: "ライセンス" }} />
      <article className={styles.licenses}>
        <h1>ライセンス</h1>
        <p>
          本サイトのコンテンツ及び
          <Link href="https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022">
            ソースコード
          </Link>
          は
          <span className={styles["license-name"]}>
            <> {thisPackage.licenses} </>
          </span>
          で公開されています。
        </p>
        <pre className={styles["license-text"]}>
          <code>{thisPackage.licenseText}</code>
        </pre>
        <Contributors contributors={thisPackage.contributors} />
        <Libraries packages={packages} />
      </article>
    </>
  );
};

const getStaticProps = async () => {
  const packagesMap = await new Promise((resolve, reject) =>
    licenseChecker.init(
      {
        start: ".",
        production: true,
        excludePrivatePackages: true,
      },
      (err, packages) => (err ? reject(err) : resolve(packages))
    )
  );

  const packages = [];
  for (const pkgName in packagesMap) {
    const pkg = packagesMap[pkgName];
    packages.push({
      name: pkgName,
      url:
        pkg.homepage ??
        (pkg.repository?.startsWith("https://")
          ? pkg.repository
          : `https://www.npmjs.com/package/${pkg.name}`),
      licenses: pkg.licenses,
      licenseText: pkg.licenseFile
        ? await fs.promises.readFile(pkg.licenseFile, "utf-8").catch(() => null)
        : null,
    });
  }

  const thisPackage = {
    name: PACKAGE.name,
    licenses: PACKAGE.license ?? "不明",
    licenseText: await fs.promises.readFile("LICENSE", "utf8").catch(() => ""),
    contributors: PACKAGE.contributors ?? [],
  };

  return { props: { packages, thisPackage } };
};

export { getStaticProps };
export default Licenses;
