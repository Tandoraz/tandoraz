function navigateTo(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top - 60 }, 'slow');
}

$(document).ready(function() {
  $('body').scrollspy({ target: '#nav' , offset: 60});
});
