import 'bootstrap';
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss";

function navigateTo(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top - 60 }, 'slow');
}

function checkNavStyle() {
 if (window.innerWidth > 600) {
   $('ul.nav-main').removeClass('nav-expanded');
 }
}

function sendMail(data) {
  var formData = {};
  data.forEach(function(input) {
    formData[input.name] = input.value;
  });
  var link = "mailto:buergi.tobias@gmail.com"
             + "&subject=" + escape(formData.name)
             + "&body=" + escape(formData.message);
  window.location.href = link;
  document.getElementById("mailForm").reset();
}

function calcAge() {
  var birthday = {
    day: 8,
    month: 4,
    year: 1998
  }
  var now = new Date();
  var age = now.getFullYear() - birthday.year;
  if (now.getMonth() < birthday.month || (now.getMonth() == birthday.month && now.getDate() < birthday.day)) {
    age--;
  }
  document.getElementById("age").innerHTML = age;
}

window.addEventListener("resize", checkNavStyle);

$(document).ready(function() {
  calcAge();
  $('body').scrollspy({ target: '#nav' , offset: 60});

  $('nav li a').click( function(e) {
    e.preventDefault();
  });

  $('ul.nav-burger li').click(function() {
    $('ul.nav-main').toggleClass('nav-expanded');
  });

  $('a#backToTop').click(function(e) {
    navigateTo('header');
    e.preventDefault();
  });

  $('li.nav-item a').click(function() {
    navigateTo($(this).attr('section-target'))
  });

  $( "form#mailForm" ).submit(function( event ) {
    sendMail($(this).serializeArray());
    event.preventDefault();
  });
});
