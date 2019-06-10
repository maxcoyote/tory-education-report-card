// Overlay link
$('.candidate').click(function() {
 event.preventDefault();
 $(this).toggleClass('active');
 nextOverlay = $(this).next('.overlay');
 nextOverlay.toggleClass('open');
});

// Overlay close
$('.overlay--close').click(function() {
  event.preventDefault();
  usedOverlay = $(this).parent().parent().parent();

  $(this).toggleClass('active');
  usedOverlay.toggleClass('open');
});

// Esc overlay
var KEYCODE_ESC = 27;

$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC) {
    $( ".overlay" ).removeClass('open');
  }
});
