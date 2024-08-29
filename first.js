window.addEventListener("scroll", function () {
  let elm = document.getElementById("menubar");

  if (window.pageYOffset >= 68) {
    elm.classList.add("sticky");
  } else {
    elm.classList.remove("sticky");
  }
});
