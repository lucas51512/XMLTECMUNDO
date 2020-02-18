const xml = new XMLHttpRequest();
var resp = '';
xml.open("GET", "https://rss.tecmundo.com.br/feed");
xml.addEventListener("load", function() {
  resp = xml.responseText;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(resp, "text/xml");

  var item = xmlDoc.getElementsByTagName("item");
  var screenHeight = screen.height;


  const imgTitle = xmlDoc.getElementsByTagName("image")[0];
  const urlTitle = imgTitle.getElementsByTagName("url")[0];
  const mainTitle = xmlDoc.getElementsByTagName("title")[0];
  const mainDescription = xmlDoc.getElementsByTagName("description")[0];

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
  var divParagraf = document.createElement("div")
  try {
    var imgBack = document.createElement("img");
    imgBack.src = url;

    imgBack.classList.add("maxSize");
    h1Title.classList.add("titulo");
    pMain.classList.add("descricao");
    h1.classList.add("mainTitle");





  } catch (e) {
    console.log(e.stack);
  }  finally{
    console.log(document);
  }


    document.body.appendChild(div);
    div.appendChild(image);
    div.appendChild(imgBack);
    div.appendChild(h1);
    div.appendChild(divParagraf);
    divParagraf.appendChild(p);

    divParagraf.classList.add("mainDescrip");
    divParagraf.classList.add("background");


    h1.textContent = title.textContent;
    p.outerHTML = description.textContent;


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
