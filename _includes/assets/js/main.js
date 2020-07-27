
mybutton = document.getElementById("goToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goToTop() {window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
window.onload = function currentyear(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML =`© `+ n+` Suyash Kelvin Savant`;
  
}