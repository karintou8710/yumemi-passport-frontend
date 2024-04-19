# yumemi passport frontend

## 概要

このレポジトリはゆめみパスポートのフロントエンド試験を実装したものです。  
都道府県別に人口構成の比較をするWebアプリになります。

## ローカルでの起動方法

- パッケージマネージャーにはyarn v1を使用しています。
- .env.sampleを参考に、.envを作成しください。起動・自動テストにはRESAS_API_KEYの登録が必要です。

```bash
$ yarn install
$ yarn dev
```

## Git

作業ブランチは取り組むIssueを作成後、最新のdevelopから切ってください。ブランチ名は`feature/#<Issue Number>_...` で統一します。  
ex）`feature/#1_initial_branch`

コミットメッセージのPrefixは[Angular.js/DEVELOPERS.md](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type)を参考にしてください。  
ex）`[feat] 人口構成のグラフ機能を追加`

## Lint, Format, Test

```bash
# eslint + prettier のチェック
$ yarn lint
# eslint + prettier のコード修正
$ yarn format
# 自動テスト(RESAS API KEYの登録の必要あり）
$ yarn test
```

## 本番用ビルド

開発環境と本番環境ではキャッシュの挙動が異なるため、最終的なテストは本番環境でお願いします。

```bash
$ yarn build
$ yarn start
```

## 技術構成

- Next.js:14 (App Router)
- tailwindcss
- recharts
- recoil
