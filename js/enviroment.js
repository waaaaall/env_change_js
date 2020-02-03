if (env == "production") {
  var rootPath = "https://production.cpdev.jp";
}
if (env == "staging") {
  console.log("検証");
  var rootPath = "https://staging.cpdev.jp";
}
if (env == "develop") {
  console.log("開発");
  var rootPath = "https://develop.cpdev.jp";
}

let proper = ["og:url", "og:image"];
envChange(rootPath, proper);
