// PROJECT PAGE

//Scroll event
document.onscroll = function() {
  var floatingBox = document.getElementById('scroll')
  floatingBox.className = "scroll-visible";
}

//Change project titles
var bangs = document.getElementById("bangs");
bangs.addEventListener("mouseover", changeText, true);

function changeText() {
  bangs.innerHTML = 'Yes, I created a website for them';
}
