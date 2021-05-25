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

  console.log(window.innerHeight)
  window.scrollTo(0,0);
  function scrollFunction() {
    // get the current scroll position
      var scrollPosition = document.documentElement.scrollTop
    // calc the height that needs to be added
      var addheight = (scrollPosition / window.innerHeight) * 2 * 100

      if (addheight < 100) {
        var plus = 50 + addheight / 2
        var minus = 50 - addheight / 2
        // add height to the top div
        document.getElementById('pusher-top').style.height = `calc(${plus}vh - 120px)`;
        // remove height to the lower div
        document.getElementById('pusher-bottom').style.height = `calc(${minus}vh - 120px)`;
      }
  }

  document.getElementById("back").addEventListener("click", function close() {
    console.log("test");
    document.getElementById('background-new-level').style.height = `0px`;
    document.getElementById('background-new-level').style.width = `0px`;
    document.body.style.overflow = "auto";
  });


});

function page() {
  var ca2 = top.innerHeight * top.innerHeight;
  var ab2 = top.innerWidth * top.innerWidth;

  var bc2 = ca2 + ab2;

  var diagle = Math.sqrt(bc2);

  console.log(diagle);

  document.getElementById('background-new-level').style.height = `100vh`;
  document.getElementById('background-new-level').style.width = `100vw`;

  // document.getElementById('background-new-level').style.height = `${diagle}px`;
  // document.getElementById('background-new-level').style.width = `${diagle}px`;
  // document.getElementById('background-new-level').style.borderRadius = "0%";
  document.body.style.overflow = "hidden";
}