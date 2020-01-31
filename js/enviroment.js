if (env == "production") {
  //   console.log("本番");
  var rootPath = "https://production.cpdev.jp";
}
if (env == "staging") {
  //   console.log("検証");
  var rootPath = "https://staging.cpdev.jp";
}
if (env == "develop") {
  //   console.log("開発");
  var rootPath = "https://develop.cpdev.jp/";
}

const metaDiscre = document.head.children;
const metaLength = metaDiscre.length;
for (var i = 0; i < metaLength; i++) {
  var proper = metaDiscre[i].getAttribute("name");
  if (proper === "description") {
    const dis = metaDiscre[i];
    dis.setAttribute("content", rootPath);
    console.log(dis);
  }
  var proper = metaDiscre[i].getAttribute("property");
  if (proper === "og:image") {
    var dir = metaDiscre[i].getAttribute("content");
    const dis = metaDiscre[i];
    dis.setAttribute("content", rootPath + dir);
    console.log(dis);
  }
}
