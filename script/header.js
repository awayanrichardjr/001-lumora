function room00() {
  document.getElementsByClassName("header")[0].style.backgroundImage =
    "url('./img/rooms/room00.webp')";
}
function room01() {
  document.getElementsByClassName("header")[0].style.backgroundImage =
    "url('./img/rooms/room01.webp')";
}
function room02() {
  document.getElementsByClassName("header")[0].style.backgroundImage =
    "url('./img/rooms/room02.jpeg')";
}

function spanValue() {
  let spanValue = document.getElementById("chevron_left").innerHTML;
  if (spanValue === "chevron_left") {
    document.getElementById("chevron_left").innerHTML = "chevron_right";
  } else {
    document.getElementById("chevron_left").innerHTML = "chevron_left";
  }
}
