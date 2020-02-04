# 環境に合わせて meta タグを変更する

## なに

本番環境、開発環境の meta タグを 1 行変更するだけで書き換えてくれるやつ

## いつ

開発中に OGP の確認をするとき
例:Twitter でシェアした時の OGP を確認したい

本番時にソースを書き換えるのではなく切り替えるのみで対応できる

## どうやって

`config.js`で環境(本番、検証、開発 etc.)を有効にするだけ

## 使い方

index.html の meta タグを変更する
使用するのは 3 ファイル

- index.html
- js/
  - config.js.example
  - enviroment.js

### プロジェクト作成時

テンプレート
`https://github.com/waaaaall/env_change_js`

`js/config.js.example`内にプロジェクトに合わせて定義を行う

```javascript=
// 本番と開発のみを想定する
// const env = "production";
// const env = "develop";
```

`js/config.js.example`を`js/config.js`にリネームする
現在の環境にあったものを有効にする

```javascript=
// ローカルの開発環境を想定しているためdevelopを有効にする
// const env = "production";
const env = "develop";
```

`js/enviroment.js`内に環境毎のルートパスを定義する

```javascript=
// 環境毎のパスを記述
if (env == "production") {
  rootPath = "https://production.example.com";
}
if (env == "develop") {
  rootPath = "https://develop.example.com";
}
```

`proper`には環境に影響のあるプロパティを定義する

```javascript=
// og:urlとog:imageを環境毎に書き換える
let proper = ["og:url", "og:image"];
```

`index.html`の 18,19 行目を確認する

```htmlmixed=
<!-- og:urlはそのままルートパスになるため空白 -->
<!-- og:imageではルートパス下を指定する -->
<meta property="og:url" content="" />
<meta property="og:image" content="/img/ogp.png" />
```

この状態で実際にブラウザから`index.html`を開くと
![image](https://user-images.githubusercontent.com/38094162/73723127-aabff100-476b-11ea-89c8-0eef2a0ca7d9.png)

meta タグが書き換えられていることが確認できる

### クローン時

最小ファイル構成

```
README.md
index.html
js/
 ├ function.js
 ├ config.js.example
 └ enviroment.js
```

プロジェクト作成時と同様に`js/config.js.example`を`js/config.js`にリネームする

`config.js`を編集する

```javascript=
// 本番環境を想定しているためdevelopを有効にする
const env = "production";
// const env = "develop";
```

ブラウザから index.html を開いて確認する

![image](https://user-images.githubusercontent.com/38094162/73723976-a5fc3c80-476d-11ea-96b2-a513732e84cb.png)

meta タグが本番環境のパスに変わっていることを確認する
