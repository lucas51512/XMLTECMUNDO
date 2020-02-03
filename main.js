try{
  var xml = new XMLHttpRequest();
  xml.open("GET", "https://rss.tecmundo.com.br/feed");
  xml.send();
  console.log(xml)

}catch(e){
  xml.abort();
  console.log("Error in " + e)
}
