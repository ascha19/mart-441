
$.fn.divStyles = function(){
  this.css("margin", "auto");
  this.css("width", "50%");
  this.css("background-color", "rgb(187, 233, 205)");
  this.css("color", "rgb(82, 164, 114)");
  this.css("border-radius", "15px");
  this.css("padding", "10px");
  this.css("text-align", "center");
  //this.css("opacity", "75%");
};

$.fn.textCenter = function(){
  this.css("text-align", "center");
  this.css("color", "rgb(17, 108, 52)");
};

//Failed font attempts
//$(".newFont").fontface({
  //fontName : "FinkHeavy",
  //fontStack : "Arial, sans-serif",
  //fileName : "./fonts/.fink-heavy.ttf"
//});
//$("head").prepend("<style> @font-face{ font-family: 'finkHeavy'; src: url('file:///" + "./fonts/fink-heavy.ttf" + "'); } </style>");
//$("#newFont").css("font-family", "finkHeavy");

$(document).ready(function(){
        var bgUrl = "./imgs/animal-crossing-wp.jpg";

        $(".background").css("background-color", "rgb(187, 233, 205)");
        $(".background").css("background-image", "url(" + bgUrl + ")");
        $("#makeDivPretty").divStyles();
        $("#centerText").textCenter();
});

function loadDoc(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      showVillagerInfo(this);
    }
  };

  xhttp.open(
    "GET", "./data/categories.xml", true
  );
  xhttp.send();
}

function showVillagerInfo(xml){
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Name</th><th>Gender</th><th>Species</th><th>Personality</th>";
  var x = xmlDoc.getElementsByTagName("VILLAGER");

  for (i = 0; i < x.length; i++){
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      x[i].getElementsByTagName("GENDER")[0].childNodes[0].nodeValue +
      x[i].getElementsByTagName("SPECIES")[0].childNodes[0].nodeValue +
      x[i].getElementsByTagName("PERSONALITY")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("villagerInfo").innerHTML = table;
}
