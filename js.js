
function greet(){
  //create loading image
  var img = document.createElement("IMG");  
  img.setAttribute("src","ajax-loader.gif")
  var parent = document.getElementById("greeting")
  parent.appendChild(img)
  var button = document.querySelector("button")
  parent.removeChild(button);

  //simulate something that takes a lng time to load
  setTimeout(ajax, 3000);
  //ajax code to call greeting
  function ajax(){
    var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("greeting").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "text.txt", true);
  xhttp.send();
  }
  
}