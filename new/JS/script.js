$(document).ready(function () {
  setTimeout(function () {
    // document.getElementsByClassName('content').style.display= "block";
    $(".content").css("display", "flex");
  }, 1500);
  setTimeout(function () {
    // document.getElementsByClassName('content').style.display= "block";
    $(".delayed2s").css("display", "block");
  }, 2700);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("pusher-top").style.fontSize = "30px";
      document.getElementById("pusher-bottom").style.fontSize = "30px";
    } else {
      document.getElementById("pusher-top").style.fontSize = "30px";
      document.getElementById("pusher-bottom").style.fontSize = "30px";
    }
  }
});
