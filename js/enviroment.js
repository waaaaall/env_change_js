if (env == "production") {
  rootPath = "https://production.cpdev.jp";
}
if (env == "staging") {
  console.log("検証");
  rootPath = "https://staging.cpdev.jp";
}
if (env == "develop") {
  console.log("開発");
  rootPath = "https://develop.cpdev.jp";
}

// 環境に左右されるプロパティを配列に入れる
let proper = ["og:url", "og:image"];

envChange(rootPath, proper);
