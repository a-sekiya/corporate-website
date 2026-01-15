/**
 * 事業紹介ページ サイドメニューのスクロール連動
 */
export const initializeBusinessMenuScroll = () => {
  const menuLinks = document.querySelectorAll(".js-business-menu-item-link");
  const sections = document.querySelectorAll(".js-scroll-section");

  if (menuLinks.length === 0 || sections.length === 0) return;

  const options = {
    rootMargin: "-25% 0px -70% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuLinks.forEach((link) => link.classList.remove("is-active"));

        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.js-business-menu-item-link[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add("is-active");
        }
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
};
