  const xml = new XMLHttpRequest();
  console.log(xml);
  xml.open("GET", "https://rss.tecmundo.com.br/feed");
  xml.addEventListener("load", function(){
    var resp = xml.responseText;
    console.log(resp);
  });
  xml.send();
