//Get the button:
mybutton = document.getElementById("goToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
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