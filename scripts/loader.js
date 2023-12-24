var myVar;

document.getElementById("myDiv").style.display = "none";
function myFunction() {
  myVar = setTimeout(showPage, 0.1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}