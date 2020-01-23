if (env == "production") {
  console.log("本番");
}
if (env == "staging") {
  console.log("検証");
}
if (env == "develop") {
  console.log("開発");
  envMeta();
}

function envMeta() {
  document.open();
  document.write(
    '<title>DEVELOP</title><meta property="og:type" content="website" /><meta property="og:site_name" content="develop" /><meta property="og:title" content="develop" /><meta property="og:description" content="JavaScriptでのOGPの出し分け確認環境" /><meta property="og:url" content="https://develop.cpdev.jp/" /><meta property="og:image" content="https://develop.cpdev.jp/img/ogp.png" /><meta property="og:locale" content="ja_JP" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="develop" /><metaname="twitter:description"content="JavaScriptでのOGPの出し分け確認環境" /><meta name="twitter:url" content="https://develop.cpdev.jp/" /><meta name="twitter:image" content="https://develop.cpdev.jp/img/develop.png" /><meta name="description" content="JavaScriptでのOGPの出し分け確認環境" />'
  );
  document.close();
}
