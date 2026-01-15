/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openButton || !closeButton) return;

  const mm = window.matchMedia("(max-width: 767px)");

  const openMenu = () => {
    if (!mm.matches) return;
    menu.showModal();
    openButton.classList.add("is-open");
    menu.animate({ opacity: [0, 1] }, { duration: 200, easing: "ease-out" });
  };

  const closeMenu = () => {
    if (!menu.open) return;

    const closingAnim = menu.animate({ opacity: [1, 0] }, { duration: 200, easing: "ease-out" });
    openButton.classList.remove("is-open");
    closingAnim.onfinish = () => {
      menu.close();
    };
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mm.matches) {
      closeMenu();
    }
  });

  mm.addEventListener("change", (e) => {
    if (!e.matches && menu.open) {
      closeMenu();
    }
  });
};
