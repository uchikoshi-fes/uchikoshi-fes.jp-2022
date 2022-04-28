# 開発の流れ

## Basics

### Branch

簡易的な [Git Flow](//dev.classmethod.jp/articles/introduce-git-flow/) で開発をします。  

- `main` : 本番用 / リリース用 (`develop` から merge する)
- `develop` : 開発版 (ここで直接は開発せず、 `feature/*` ブランチを切る。ただし多少の Fix はここでやってもよいです)
- `feature/*` : それぞれの機能など (Issues の ID を最初につけたり)
- `hotfix/*` : 緊急修正用 (`main` から切る)

`release` branch は使用しません。  

### Next.js

コマンドを使える必要があります。  
`npm run dev` でプレビューサーバーを起動でき、  
`npm run static` で静的エクスポートができます。  

### Deploy

GitHub に push した際に、この repository と連携している Cloudflare Pages プロジェクト上で、  
自動でビルドが走り deploy されます。  

## Flow

### 新機能などの作成

1. `develop` branch から `feature/*` branch を切る  
   このとき、 `*` は Issues の ID や機能名を初め動詞で、  
   さらに初めの文字が大文字の Snake_case で命名する。  
   またできるだけ簡潔にする。  
   例: `feature/#13_Add_form`  
2. その機能を開発する  
   細かい単位で commit しましょう。  
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
2. `package.json` の `"version"` を更新する  
3. `README.md` の Version: を更新する  
   (括弧の中) に主な更新点を記述。  
4. `main` branch に Pull Request を投げる  
5. 別の人からチェックを受ける  
6. Pull Request を merge する  
7. Merge Commit に tag をつける  
   例: `v1.2.3`  

### 緊急修正

1. `main` branch から `hotfix/*` branch を切る  
   命名は `feature/*` と同じルールで。  
2. バグを修正する  
   commit message の書き方は新機能と同じルールで。  
3. バージョンアップと同じ Flow で反映  
   ただしチェックは緩めに、速度重視で。  
4. `develop` にも merge する  