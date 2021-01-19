function showHideElement() {
  const x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function scrollDown() {
  document.getElementById("container").scrollBy(0,200);
}

function scrollUp() {
  document.getElementById("container").scrollBy(0,-200);
}
