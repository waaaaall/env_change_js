if (env == "production") {
  document.open();
  document.write(
    '<title>PRODUCTION</title><meta property="og:type" content="website" /><meta property="og:site_name" content="prod" /><meta property="og:title" content="prod" /><meta property="og:description" content="JavaScriptでのOGPの出し分け確認環境" /><meta property="og:url" content="https://prod.cpdev.jp/" /><meta property="og:image" content="https://prod.cpdev.jp/img/ogp.png" /><meta property="og:locale" content="ja_JP" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="prod" /><meta name="twitter:description" content="OGPの出し分け確認 本番" />'
  );
  document.close();
}
if (env == "staging") {
  console.log("検証");
}
if (env == "develop") {
  document.open();
  document.write(
    '<title>DEVELOP</title><meta property="og:type" content="website" /><meta property="og:site_name" content="develop" /><meta property="og:title" content="develop" /><meta property="og:description" content="JavaScriptでのOGPの出し分け確認環境" /><meta property="og:url" content="https://develop.cpdev.jp/" /><meta property="og:image" content="https://develop.cpdev.jp/img/ogp.png" /><meta property="og:locale" content="ja_JP" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="develop" /><meta name="twitter:description" content="OGPの出し分け確認 開発" />'
  );
  document.close();
}

function envMeta() {}
