$(document).ready(function () {
  setTimeout(function () {
    // document.getElementsByClassName('content').style.display= "block";
    $(".content").css("display", "block");
  }, 1500);
  setTimeout(function () {
    // document.getElementsByClassName('content').style.display= "block";
    $(".delayed2s").css("display", "block");
  }, 2700);

  document.addEventListener("scroll", function () {
    var scroll = Math.round(Math.round(window.pageYOffset / 100) / 1.5);
    switch (scroll) {
      case 1:
        $("header").css("height", "90vh");
        break;
      case 2:
        $(".header").css("height", "80vh");
        break;
      case 3:
        $(".header").css("height", "70vh");
        break;
      case 4:
        $(".header").css("height", "60vh");
        break;
      case 5:
        $(".header").css("height", "50vh");
        break;

      default:
        break;
    }
  });
});
