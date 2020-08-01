//This function add the menu button to the page

let menu_icon = function (create) {
  let elementMenu = document.getElementById("menu-icon");

  if (create) {
    let icon = new Image(50, 50); //create the icon from an image
    icon.src = "IMG/menu-icon.png";
    elementMenu.appendChild(icon);
    menuIconImage.style.display = "inline";
  } else {
    elementMenu.innerHTML = "";
  }
};

//this function handles the toggle of the menu and the icon
let toggleMenu = function () {
  let containerElement = document.getElementById("subcontainer");
  let footerElement = document.getElementById("footer");

  menuIconImage.addEventListener("click", () => {
    menuIconImage.style.display = "none";
    menuCard.style.display = "inline";
  });
  containerElement.addEventListener("click", function (event) {
    menuIconImage.style.display = "inline";
    menuCard.style.display = "none";
  });
  footerElement.addEventListener("click", function (event) {
    menuIconImage.style.display = "inline";
    menuCard.style.display = "none";
  });
};

//the function that hides the icon in case the window becomes wider than 660px
let hide_icon_menu = function () {
  menuIconImage.style.display = "none";
  menuCard.style.display = "none";
};

let menuIconImage = document.getElementById("menu-icon");
let menuCard = document.getElementById("navbar-mobile");
let toggle;

//handles the creation of the floating icon and the function than handles the toggle
if (window.innerWidth <= 600) {
  menu_icon(true);
  toggleMenu();
  toggle = true;
} else {
  toggle = false;
}

//the event listener for an resize event, when the width of the window is less than 660px
//toggle variable handles the state of the menu => if toggle=true menu active, toggle=false menu inactive
window.addEventListener("resize", () => {
  if (window.innerWidth <= 660 && !toggle) {
    menu_icon(true);
    toggleMenu();
    toggle = true;
  } else if (window.innerWidth > 660 && toggle) {
    hide_icon_menu();
    menu_icon(false);
    toggle = false;
  }
});

//getting height of the video to leave the cards fixed
let videoHeight = document.getElementById("hero-video");
let root = document.documentElement;
root.style.setProperty("--video-height", videoHeight.clientHeight + "px");

window.addEventListener("resize", () => {
  root.style.setProperty("--video-height", videoHeight.clientHeight + "px");
});
