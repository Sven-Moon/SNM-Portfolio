export default function activateDropdowns() {
  var DELAY = 60;
  // Listen to clicks on all drop downs
  document.querySelectorAll(".dropdown").forEach((el) => {
    el.addEventListener("mouseenter", translateXMenuIn);
    el.addEventListener("mouseleave", translateXMenuOut);
  });

  function translateXMenuIn(e) {
    const menu = document.querySelector(`#${e.target.id} .dropdown__menu`);
    menu.classList.add("show");

    const menuItems = document.querySelectorAll(`#${e.target.id} a`);
    menuItems.forEach((item) => {
      const delay = item.dataset.index * DELAY;
      item.classList.add("translate-x");

      // item.style = `animation: 300ms ease ${delay}ms 1 normal forwards running translateXIn`;
      item.style.animation = `300ms ease ${delay}ms 1 normal forwards running translateXIn`;
    });
  }
  function translateXMenuOut(e) {
    const menu = document.querySelector(`#${e.target.id} .dropdown__menu`);
    const menuItems = document.querySelectorAll(`#${e.target.id} a`);

    menuItems.forEach((item) => {
      const delay = item.dataset.index * DELAY;
      item.style.animation = `300ms ease ${delay}ms 1 normal forwards running translateXOut`;
    });
    setTimeout(() => {
      menu.classList.remove("show");
    }, DELAY * menuItems.length + 300);
  }
}
