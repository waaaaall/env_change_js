if (env == "production") {
  console.log("本番");
  envMeta();
}
if (env == "staging") {
  console.log("検証");
}
if (env == "develop") {
  console.log("開発");
}

function envMeta() {
  document.open();
  document.write("<title>ほないくで</title>");
  document.close();
}
