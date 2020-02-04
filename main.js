  const xml = new XMLHttpRequest();
  var resp = '';
  xml.open("GET", "https://rss.tecmundo.com.br/feed");
  xml.addEventListener("load", function(){
    resp = xml.responseText;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(resp, "text/xml");

  img = xmlDoc.getElementsByTagName("image")[0];
  url = img.getElementsByTagName("url")[0];
  title = xmlDoc.getElementsByTagName("title")[0];
  description = xmlDoc.getElementsByTagName("description")[0];



  });
  xml.send();
