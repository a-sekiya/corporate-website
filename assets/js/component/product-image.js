/**
 * 製品案内詳細ページの画像
 */
export const initializeProductImage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const mainEl = document.querySelector(".js-product-detail-main-slider");
    const thumbEl = document.querySelector(".js-product-detail-thumbnail-slider");

    if (!mainEl || !thumbEl) return;

    var mainSlider = new Splide(mainEl, {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });

    var thumbSlider = new Splide(thumbEl, {
      fixedWidth: 104,
      fixedHeight: 104,
      rewind: true,
      pagination: false,
      arrows: false,
      isNavigation: true,
      drag: false,

      breakpoints: {
        767: {
          fixedWidth: 72,
          fixedHeight: 72,
        },
      },
    });

    mainSlider.sync(thumbSlider);
    mainSlider.mount();
    thumbSlider.mount();
  });
};
