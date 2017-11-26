import 'bootstrap';

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

var birthday = {
  day: 08,
  month: 04,
  year: 1998
}
var now = new Date();
var age = now.getFullYear() - birthday.year;
if (now.getMonth() < birthday.month || (now.getMonth() == birthday.month && now.getDate() < birthday.day)) {
  age--;
}
document.getElementById("age").innerHTML = age;

$(document).ready(function() {
  $('body').scrollspy({ target: '#nav' , offset: 60});

  $('nav li a').click( function(e) {
    e.preventDefault();
  });

  $('ul.nav-burger li').click(function() {
    $('ul.nav-main').toggleClass('nav-expanded');
  });

  $( "form#mailForm" ).submit(function( event ) {
    sendMail($(this).serializeArray());
    event.preventDefault();
  });
});
