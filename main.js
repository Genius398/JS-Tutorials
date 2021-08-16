document.getElementById("body").onscroll = function myFunction() {
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("body");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
};
