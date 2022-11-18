# PWA Install Sample

フロントエンドカンファレンス沖縄 2022 の登壇資料で紹介しているサンプルコードです。

ブランチごとに実装パターンを分けています。

- mini-infobar：ベーシックな PWA インストール可能にした状態、ページ下部にバナーが出る
- rich-ui：ページ下部のバナーを展開して説明文とスクリーンショットを見ることができる
- main：バナーは非表示にしておき、ユーザーがダウンロードボタンを押したときにインストール UI が展開する

## 開発環境

デモサイトの開発には [Astro](https://astro.build) を使用しています。

### Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Text.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
