  const xml = new XMLHttpRequest();
  console.log(xml);
  xml.open("GET", "https://rss.tecmundo.com.br/feed");
  xml.addEventListener("load", function(){
    var resp = xml.responseText;

  });
  xml.send();

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml, "text/xml");
  console.log(xmlDoc);

  document.getElementsByTagName('image').innerHTML = xmlDoc.getElementsByTagName('image')[0];
  var title = xmlDoc.getElementsByTagName('title')[0];
  var description = xmlDoc.getElementsByTagName('description')[0];
  console.log(img);
