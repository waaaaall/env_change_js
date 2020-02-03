function envChange(rootPath, proper) {
  const metaDiscre = document.head.children;
  const metaLength = metaDiscre.length;
  for (var i = 0; i < metaLength; i++) {
    for (let v of proper) {
      if (
        v === metaDiscre[i].getAttribute("name") ||
        v === metaDiscre[i].getAttribute("property")
      ) {
        var dir = metaDiscre[i].getAttribute("content");
        const dis = metaDiscre[i];
        dis.setAttribute("content", rootPath + dir);
        console.log(dis);
      }
    }
  }
}
