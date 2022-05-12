<!-- SPDX-License-Identifier: MIT -->

# 開発の流れ

## Basics

### Branch

簡易的な [Git Flow](//dev.classmethod.jp/articles/introduce-git-flow/) で開発をします。

- `main` : 本番用 / リリース用 (`develop` から merge する)
- `develop` : 開発版 (ここで直接は開発せず、 `feature/*` ブランチを切る。バージョンアップの時のみ直接コミットしてよい。)
- `feature/*` : それぞれの機能など (バグ修正等、機能でなくてもいい)
- `hotfix/*` : 緊急修正用 (`main` から切る)

`release` branch は使用しません。

### License

新しいファイルを作る際、  
そのファイルが記事の JSX ファイルなら 1 行目に行コメントで `SPDX-License-Identifier: CC-BY-NC-4.0` と、  
記事や画像などのコンテンツではないプログラムのファイルは同じように `SPDX-License-Identifier: MIT` と書いてください。  
記事の MDX ファイルや画像ファイルへのライセンスの記述は不要です。

### Next.js

コマンドを使える必要があります。

- `npm install` : 必要なライブラリを全てインストール
- `npm run dev` : プレビューサーバーを起動
- `npm run static` : 静的エクスポート
- `npm run lint` : コードや文章の校正
- `npm test` : 単体テスト

### Lint

何らかの都合により一部分だけ lint を無効化したいときは、  
ESLint の場合は [ESLint のコメントでのルール制御 - Qiita](//qiita.com/nju33/items/2d0cfea4fffbfdbff87a) の方法で、  
textlint の場合は [textlint-filter-rule-comments](//github.com/textlint/textlint-filter-rule-comments) を入れているためその機能でできます。  
また一部分だけ Prettier のフォーマットを無視させたい場合は [Ignoring Code - Prettier](//prettier.io/docs/en/ignore.html) の方法でできます。

#### 「かた」と読む「方」が [ja-hiragana-keishikimeishi](//github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi) に `漢字よりもひらがなで表記したほうが読みやすい形式名詞` の「ほう」として判定されてしまう場合

このような場合 [textlint-filter-rule-comments](//github.com/textlint/textlint-filter-rule-comments) で無効化するのではなく、  
できるだけ「場合」や「人」など別の表現で置き換えましょう。

これは、「かた」として「方」を書いているつもりでも「ほう」と読み間違えてしまう可能性があるので、  
それを防止するためです。

もちろん引用など、文章校正を受けたくない場合はコメントでのルール制御を行うべきですが、  
そのような場合は [ja-hiragana-keishikimeishi](//github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi) のみではなく  
ルールを指定せずに全てのルールを無効化するべきです。

### Test

test は複雑なところほど入念に書きましょう。

### Git

git-hooks によって commit 時に lint と format が走ります。  
lint はキャッシュされるため、変更点だけのチェックとなります。  
lint でエラーが出た場合は commit できないので、  
修正してから commit し直してください。

test が成功しない通らない状態で commit をしてもいいですが、  
Pull Request 時には test が成功するようにしてください。

push 時に GitHub Actions にて自動で lint と test が走るようにしています。  
これらを参考にしながら開発しましょう。

### Deploy

GitHub に push した際、この repository と連携している Cloudflare Pages プロジェクト上で、  
自動でビルドが走り deploy されます。  
また push 時に GitHub Actions によって lint が走ります。

## Flow

### 新機能などの作成

1. `develop` branch から `feature/*` branch を切る  
   このとき、 `*` は Issues の ID や機能名を初め動詞で、  
   さらに初めの文字が大文字の Snake_case で命名する。  
   またできるだけ簡潔にする。  
   例: `feature/#13_Add_form`, `feature/Create_layout`
2. その機能を開発する  
   細かい単位で commit しましょう。  
   ブランチと関係のないことは別のブランチを切ってやりましょう。  
   また commit message は丁寧に書きましょう。  
   「何を」「なぜ」が重要です。  
   初めに以下の例のようなフォーマットで動詞を書きましょう。  
   例: `Add: form の css を追加`, `Clean: インデントを下げるために早期 return に書き換え`
3. 完成したら必ず `develop` branch から merge して conflict を解決する
4. `develop` branch に Pull Request を投げる  
   Pull Request の説明欄に `close #13` などと書くことで同時に Issue も閉じることができます。
5. review を通ったら無事、 `develop` branch に merge されます！

### バージョンアップ

1. [`develop` branch の preview](//develop.uchikoshi-fes-2022.pages.dev/) を確認する
2. `develop` branch で `package.json` の `"version"` を更新し、  
   `README.md` の `Version:` を更新して `(括弧の中)` に主な更新点を記述。
3. `main` branch に Pull Request を投げる
4. 別の人からチェックを受ける
5. Pull Request を merge する
6. Merge Commit に tag をつける  
   例: `v1.2.3`

### 緊急修正

1. `main` branch から `hotfix/*` branch を切る  
   命名は `feature/*` と同じルールで。
2. バグを修正する  
   commit message の書き方は新機能と同じルールで。
3. バージョンアップと同じ Flow で反映  
   ただしチェックは緩めに、速度重視で。
4. `develop` にも merge する
