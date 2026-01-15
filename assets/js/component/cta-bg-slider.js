/**
 * cta背景スライド
 */
export const initializeCtaBgSlider = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".js-cta-bg-splide");
    if (!el) return;

    const splide = new Splide(el, {
      type: "loop",
      drag: false,
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: "100rem",
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    });

    splide.mount(window.splide.Extensions);
  });
};
