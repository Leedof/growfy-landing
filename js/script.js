"use strict";

document.addEventListener("click", onClickHandler);

function onClickHandler(e) {
  const target = e.target;

  if (target.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
