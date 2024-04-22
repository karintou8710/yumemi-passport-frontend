# yumemi passport frontend

## 概要

このレポジトリはゆめみパスポートのフロントエンド試験を実装したものです。  
都道府県別に人口構成の比較をするWebアプリになります。

## ローカルでの起動方法

- パッケージマネージャーにはyarn v1を使用しています。
- `.env.sample`を参考に、`.env`を作成しください。起動・自動テストにはRESAS_API_KEYの登録が必要です。

```bash
$ yarn install
$ yarn dev
```

## 本番用ビルド

開発環境と本番環境ではキャッシュの挙動が異なるため、最終的なテストは本番環境でお願いします。

```bash
$ yarn build
$ yarn start
```

## Git

作業ブランチは取り組むIssueを作成後、最新のdevelopから切ってください。  
ブランチ名は`feature/#<Issue Number>_...` で統一します。  
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

## コンポーネント分割の粒度

- `components/atom`は特定のドメインを含まない純粋で再利用可能なコンポーネント
- `components/usecase`は、特定のドメインを含むが複数のページで再利用されるコンポーネント
- 特定のページでしか使用しないコンポーネントはapp配下の[Private Folder](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders)を活用

## 技術構成

- Next.js:14 (App Router)
- tailwindcss
- recharts
- recoil
