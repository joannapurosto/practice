// $(document).foundation()

//Scroll event to project page


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



//haluaisin vielä muuttaa niin, että kun hiiri poistuu, teksti muuttuu takaisin
//var el = document.getElementById("bangs");
//el.addEventListener("mouseoff", showData, true);

//function showData() {
//  document.getElementById("bangs").innerHTML = 'Website for Studio Bangs';}
