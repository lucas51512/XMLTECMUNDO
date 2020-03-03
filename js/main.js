const xml = new XMLHttpRequest();
var resp = '';
xml.open("GET", "http://g1.globo.com/dynamo/pop-arte/rss2.xml");
xml.addEventListener("load", function() {
  resp = xml.responseText;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(resp, "text/xml");

  var item = xmlDoc.getElementsByTagName("item");
  var sH = screen.height;
  var sW = screen.width;

  const imgTitle = xmlDoc.getElementsByTagName("image")[0];
  const urlTitle = imgTitle.getElementsByTagName("url")[0];
  const mainTitle = xmlDoc.getElementsByTagName("title")[0];
  const mainDescription = xmlDoc.getElementsByTagName("description")[0];

  var divTitle = document.createElement("div")
  var imageTitle = document.createElement("img");
  var h1Title = document.createElement("h1");
  var pMain = document.createElement("p");
  imageTitle.src = urlTitle.textContent;

    imageTitle.setAttribute("id", "imageTitle");
    h1Title.setAttribute("id", "mainTitle");
    pMain.setAttribute("id", "pMain");

  document.body.appendChild(divTitle);
  divTitle.appendChild(imageTitle);
  divTitle.appendChild(h1Title);
  divTitle.appendChild(pMain);

  h1Title.textContent = mainTitle.textContent;
  pMain.textContent = mainDescription.textContent;

  var title = xmlDoc.getElementsByTagName("title")[2];
  var description = xmlDoc.getElementsByTagName("description")[1];

  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  var divParagraf = document.createElement("div");

   h1.setAttribute("id", "h1Title");
   p.setAttribute("id", "pDescrip");

   console.log(p);

  document.body.appendChild(div);
  div.appendChild(h1);
  div.appendChild(divParagraf);
  divParagraf.appendChild(p);

  h1.textContent = title.textContent;
  p.outerHTML = description.textContent;

  var img = description.getElementsByTagName("img");

});

xml.send();
