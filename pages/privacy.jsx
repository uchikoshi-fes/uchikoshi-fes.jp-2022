// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
// styles
import styles from "./privacy.module.scss";

const Privacy = () => {
  return (
    <>
      <NextSeo
        title="プライバシーポリシー"
        openGraph={{ title: "プライバシーポリシー" }}
      />
      <article className={styles.privacy}>
        <h1>
          プライバシー
          <wbr />
          ポリシー
        </h1>
        <p>本サイトでは個人情報を収集しておりません。</p>
        <article>
          <h2>個人情報とは</h2>
          <p>
            このプライバシーポリシーでの個人情報とは、<></>
            個人情報保護法に定義される個人情報を指します。
          </p>
        </article>
        <article>
          <h2>アクセス解析ツールに関して</h2>
          <p>
            本サイトでは、
            <Link href="https://www.cloudflare.com/ja-jp/web-analytics/">
              Cloudflare Web Analytics
            </Link>
            と<> </>
            <Link href="https://search.google.com/search-console">
              Google Search Console
            </Link>
            を利用しています。<></>
            これらは Cookie を使用していません。<></>
            またトラフィックデータは匿名で収集されており、<></>
            個人を特定するものではありません。
          </p>
        </article>
        <article>
          <h2>他サイトの埋め込みコンテンツに関して</h2>
          <p>
            本サイトには埋め込みコンテンツが含まれています。<></>
            これらの埋め込みコンテンツは他のサイトで提供されており、<></>
            これらのサイトは Cookie を使用している場合があります。<></>
            これらのサイトの Cookie の使用については、<></>
            それぞれのサイトのプライバシーポリシーをご確認ください。
          </p>
        </article>
        {false && (
          <article>
            <h2>Google ログインに関して</h2>
            <p>TODO: RIZE を実装してから追記する</p>
          </article>
        )}
        <article>
          <h2>プライバシーポリシーの適用範囲に関して</h2>
          <p>
            本サイトのプライバシーポリシーは、<></>
            本サイトにリンクされている他のサイトには適用されません。
          </p>
        </article>
        <article>
          <h2>閲覧者の同意に関して</h2>
          <p>
            本サイトは、閲覧者が本サイトを利用することにより、<></>
            本サイトのプライバシーポリシーに同意したものとみなします。<></>
            本サイトのプライバシーポリシーは<></>
            随時変更される可能性があります。<></>
            変更された場合は、本サイトに掲載された<></>
            最新のプライバシーポリシーに従ってください。<></>
            また、本サイトのご利用は<></>
            閲覧者の責任において行ってください。
          </p>
        </article>
      </article>
    </>
  );
};

export default Privacy;
