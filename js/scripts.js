$(document).ready(function () {
  "use strict";

  let progressVal = $('.progress-value');
  progressVal.css( "display", "none"); 

  $("a[href*=#]").bind("click", function (e) {
    let anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    e.preventDefault();
  });
     
  function scrollingToSkills() {
    let counter = 0,
        skills_item = $('.skills_item:first-child');

    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      var offset = skills_item.offset().top;
    
      if (scroll > offset && counter == 0) {
        setTimeout(function() {
          progressVal.css( "display", "block"); 
          counter = 1;
        }, 1500)
      }
    });
  }
  scrollingToSkills();
  
  return false;
});
