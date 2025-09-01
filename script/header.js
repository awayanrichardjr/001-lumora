const headerrr = document.getElementsByClassName("header")[0];

function room00() {
  headerrr.style.backgroundImage = "url('./img/rooms/room00.webp')";
}
function room01() {
  headerrr.style.backgroundImage = "url('./img/rooms/room01.webp')";
}
function room02() {
  headerrr.style.backgroundImage = "url('./img/rooms/room02.jpeg')";
}

function spanValue() {
  const sidebarContent = document.getElementById("sidebar-content");
  const chevronLeft = document.getElementById("chevron_left");

  let spanValue = chevronLeft.innerHTML;
  if (spanValue === "chevron_left") {
    chevronLeft.innerHTML = "chevron_right";

    sidebarContent.style.width = "350px";
    sidebarContent.style.opacity = "1";
    sidebarContent.style.paddingInlineStart = "1rem";
    sidebarContent.style.paddingInlineEnd = "4rem";
    sidebarContent.style.transition = "0.5s";
  } else {
    chevronLeft.innerHTML = "chevron_left";
    sidebarContent.style.width = "0";
    sidebarContent.style.opacity = "0";
  }
}
