const xml = new XMLHttpRequest();
var resp = '';
xml.open("GET", "https://rss.tecmundo.com.br/feed");
xml.addEventListener("load", function(){
  resp = xml.responseText;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(resp, "text/xml");

  var item = xmlDoc.getElementsByTagName("item");

const  imgTitle = xmlDoc.getElementsByTagName("image")[0];
const  urlTitle = imgTitle.getElementsByTagName("url")[0];
const  mainTitle = xmlDoc.getElementsByTagName("title")[0];
const  mainDescription = xmlDoc.getElementsByTagName("description")[0];

var divTitle = document.createElement("div")
var imageTitle = document.createElement("img");
var h1Title = document.createElement("h1");
var pMain = document.createElement("p");
imageTitle.src = urlTitle.textContent;

document.body.appendChild(divTitle);
divTitle.appendChild(imageTitle);
divTitle.appendChild(h1Title);
divTitle.appendChild(pMain);

h1Title.textContent = mainTitle.textContent;
pMain.textContent = mainDescription.textContent;


  var  url = xmlDoc.getElementsByTagName("enclosure")[0].getAttribute('url');
  var  title = xmlDoc.getElementsByTagName("title")[2];
  var  description = xmlDoc.getElementsByTagName("description")[1];

  var dom = document;
  var div = document.createElement("div");
  var image = document.createElement("img");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  image.classList.add("maxSize");

  document.body.appendChild(div);
  div.appendChild(image);
  div.appendChild(h1);
  div.appendChild(p);

  h1.textContent = title.textContent;
  p.outerHTML = description.textContent;


try {
  var background = document.body.style.background = "url("+url+")";
  var size = document.body.style.backgroundSize = "1080px 720px;"
  var repeat = document.body.style.backgroundRepeat = "no-repeat";


} catch (e) {
  console.log(e.stack);
}  finally{
  console.log(document);
}

localStorage.setItem("dom", dom);
localStorage.setItem("image", url);
localStorage.setItem("titulo", title);
localStorage.setItem("descricao", description);

});

    xml.send();

    if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker
    .register("http://localhost/localHost/xml_tecmundo/serviceWorker.js")
    .then(reg => console.log("serviceWorker: Registered"))
    .catch(err => console.log("serviceWorker: Error" + err) )
  })
}
