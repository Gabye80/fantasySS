function showMenu() {
  var menu = document.getElementById("side-menu");
  var icon = document.getElementById("cursor-container");

  if (menu.className == "side-menu") {
    menu.className += " side-menu-opened";
    menu.style.transition = "1s";
    
    icon.className += " cursor-container-opened";
    icon.style.transition = "1s";
  } else {
    menu.className = "side-menu";
    menu.style.transition = "1s";
  
    icon.className = "cursor-container";
    icon.style.transition = "1s";
  }
}
