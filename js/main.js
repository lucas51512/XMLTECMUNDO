const xml = new XMLHttpRequest();
var resp = '';
console.log(xml);
xml.open("GET", "https://rss.tecmundo.com.br/feed");
xml.addEventListener("load", function(){
  resp = xml.responseText;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(resp, "text/xml");

  var item = xmlDoc.getElementsByTagName("item");
  console.log(item);

//  var  img = xmlDoc.getElementsByTagName("image")[0].getAttribute('url');
//  var imgTitle = document.createElement("img");
//  let div2 = document.createElement("div");
//  div2.appendChild(imgTitle);


  for(i = 0;i < item.length;i++){
  var  url = item[i].getElementsByTagName("enclosure")[0].getAttribute('url');
  var  title = item[i].getElementsByTagName("title")[0];
  var  description = item[i].getElementsByTagName("description")[0];

  var dom = document;
  var div = document.createElement("div");
  var image = document.createElement("img");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  image.src = url;

  document.body.appendChild(div);
  div.appendChild(image);
  div.appendChild(h1);
  div.appendChild(p);

  h1.textContent = title.textContent;
  p.outerHTML = description.textContent;
}
console.log(document);

localStorage.setItem("dom", dom);
localStorage.setItem("image", url);
localStorage.setItem("titulo", title);
localStorage.setItem("descricao", description);

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
