/**
 * お知らせページのアーカイブ一覧
 */
export const initializeNewsArchives = () => {
  const menuLinks = document.querySelectorAll(".js-news-menu-item-link");

  if (!menuLinks) return;

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      menuLinks.forEach((item) => item.classList.remove("is-active"));

      this.classList.add("is-active");
    });
  });
};
