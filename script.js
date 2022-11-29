let slideIndex = 1;
show(slideIndex);

// Next/previous controls
function plusSlides(n) {
  show(slideIndex += n);
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let demo = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  //does not display the other pictures
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = demo[slideIndex - 1].alt; //shows the image captions
}

//Registering for consultation
var consult = document.querySelector("#consult")
consult.addEventListener("click", function(){
  alert("Please scroll down to the Contact Us section and fill in your details. We will get back to you in 1-2 business days.")
  location.href = "faq.html"
})

//Takes user to social media account.
var follow = document.querySelector("#flw")
follow.addEventListener("click", function(){
  alert("We are working on our social media page. Come back again! We appreciate your patience during this time.")
})


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//calculating skin type//
document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "one"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "two"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "three"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "four"]:checked').value);


	   result = one + two + three + four;

	document.getElementById("grade").innerHTML = result;



return false;


/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
*/