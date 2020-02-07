const xml = new XMLHttpRequest();
var resp = '';
console.log(xml);
xml.open("GET", "https://rss.tecmundo.com.br/feed");
xml.addEventListener("load", function(){
  resp = xml.responseText;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(resp, "text/xml");

  var item = xmlDoc.getElementsByTagName("item")[0];
  console.log(item);

for (var i = 0; i < item.length; i++) {
  var  img = xmlDoc.getElementsByTagName("image")[0];
  var  url = img.getElementsByTagName("url")[0];
  var  title = xmlDoc.getElementsByTagName("title")[0];
  var  description = xmlDoc.getElementsByTagName("description")[0];

  var div = document.createElement("div");
  var image = document.createElement("img");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  image.src = url.textContent;

  document.body.appendChild(div);
  div.appendChild(image);
  div.appendChild(h1);
  div.appendChild(p);

  h1.textContent = title.textContent;
  p.textContent = description.textContent;
}

localStorage.setItem("dom", dom);
localStorage.setItem("urlImage", baseImg);
localStorage.setItem("titulo", buscaTitulo.textContent );
localStorage.setItem("descricao", descricao.textContent);
}
});
    xml.send();

    if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker
    .register("http://localhost/localHost/(xmlTecmundo)/serviceWorker.js")
    .then(reg => console.log("serviceWorker: Registered"))
    .catch(err => console.log("serviceWorker: Error" + err) )
  })
}
