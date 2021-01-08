$(document).ready(function () {
  $("a[href*=#]").bind("click", function (e) {
    var anchor = $(this);
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
  return false;
});

// console.info($(".test").val(""));
