// 環境毎のパスを記述
if (env == "production") {
  rootPath = "https://production.example.com";
}
if (env == "develop") {
  console.log("開発");
  rootPath = "https://develop.example.com";
}

// 環境に左右されるプロパティを配列に入れる
let proper = ["og:url", "og:image"];

envChange(rootPath, proper);
