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
  const sidebarOpenConfig = {
    chevronLeft: {
      innerHTML: "chevron_right",
    },
    sidebarContent: {
      width: "350px",
      opacity: "1",
      paddingInlineStart: "1rem",
      paddingInlineEnd: "4rem",
      transition: "0.5s",
    },
    sidebarContent425Media: {
      width: "300px",
      opacity: "1",
      paddingInlineStart: "1rem",
      paddingInlineEnd: "4rem",
      transition: "0.5s",
    },
  };

  let spanValue = chevronLeft.innerHTML;
  if (spanValue === "chevron_left") {
    if (window.matchMedia("(max-width: 426px)").matches) {
      chevronLeft.innerHTML = sidebarOpenConfig.chevronLeft.innerHTML;
      Object.assign(
        sidebarContent.style,
        sidebarOpenConfig.sidebarContent425Media
      );
    } else {
      chevronLeft.innerHTML = sidebarOpenConfig.chevronLeft.innerHTML;
      Object.assign(sidebarContent.style, sidebarOpenConfig.sidebarContent);
    }
  } else {
    chevronLeft.innerHTML = "chevron_left";
    sidebarContent.style.width = "0";
    sidebarContent.style.opacity = "0";
  }
}
