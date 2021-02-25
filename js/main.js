$(document).ready(function () {
  $(".fixed-menu").hide();

  //nicescroll trigger
  $("body").niceScroll({
    cursorcolor: "#f7600e",
    cursorwidth: "10px",
    cursorborder: "none",
    cursorborderradius: 4
  });

  // fixed menu
  $(".show-m").on("click", () => $(".fixed-menu").fadeIn(300));
  $(".cross").on("click", () => $(".cross").parent().fadeOut(300));

  // bootom arrow
  $(".header-arrow").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      1000
    );
  });
  // header link click
  $("header ul li a, .buttons button").on("click", function () {
    $(".fixed-menu").fadeOut(400);
    $("html, body").animate(
      {
        scrollTop: $($(this).data("link")).offset().top
      },
      800
    );
  });
});
