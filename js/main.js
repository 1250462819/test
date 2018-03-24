// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
$(window).scroll(function() { // when the page is scrolled run this
    if($(this).scrollTop() != 0) { // if you're NOT at the top
        document.getElementById('top').style.visibility = 'visible';
        $('#top').fadeIn("fast"); // fade in
    } else { // else
        $('#top').fadeOut("fast"); // fade out
    }
});

$('#top').click(function() { // when the button is clicked
    $('body,html').animate({scrollTop:0},500); // return to the top with a nice animation
});