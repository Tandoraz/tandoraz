function navigateTo(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top - 60 }, 'slow');
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
});
