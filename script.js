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
    }
    else {
      li[i].style.display = "none";
    }
  }
}

//Registering for consultation
var consultBut = document.querySelector("#consult");
consultBut.addEventListener("click", bookConsultation);
function bookConsultation() {
  alert("Please scroll down to the Contact Us section and fill in your details. We will get back to you in 1-2 business days.");
  location.href = "faq.html";
}

//Takes user to social media account.
var followBut = document.querySelector("#flw");
followBut.addEventListener("click", followPage);
function followPage() {
  alert("We are working on our social media page. Come back again! We appreciate your patience during this time.");
}

//contact us submit button

function contactConfirm() {
  alert("Thank you for submitting your information. We will be in touch with you shortly!");
}

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

/* FAQ */

// var q1 = document.querySelector("#q1");
// q1.addEventListener("mouseover", mOver);

// function mouseOver(){
//   alert();
//   // question.innerHTML = "Visit the Skin Type page to do a skin test, and this test is free.";
// }

function q1Over() {
  document.querySelector("#a1").textContent = "Yes. The test is free! Visit the Skin Type page to do a skin test, and this test is completely free"
}
function q1Out() {
  document.querySelector("#a1").textContent = ""
}
function q2Over() {
  document.querySelector("#a2").textContent = "No. This website only stores recommendation of products that may be suitable for you. You cannot purchase anything through this website. However, we do provide links to the site that do offer the products for you to purchase."
}
function q2Out() {
  document.querySelector("#a2").textContent = ""
}
function q3Over() {
  document.querySelector("#a3").textContent = "Simply visit our home page and click on Book a Consultation Today button!"
}
function q3Out() {
  document.querySelector("#a3").textContent = ""
}
function q4Over() {
  document.querySelector("#a4").textContent = "Please scroll down on this page, and fill out the Contact Us form. We will be in touch shortly!"
}
function q4Out() {
  document.querySelector("#a4").textContent = ""
}

function q5Over() {
  document.querySelector("#a5").textContent = "For suggestions on any of the content on our page, please contact us using the form below."
}

function q5Out() {
  document.querySelector("#a5").textContent = ""
}

function contactConfirm(){
  alert("Thank you for submiting! We will be in touch with you soon!")
}