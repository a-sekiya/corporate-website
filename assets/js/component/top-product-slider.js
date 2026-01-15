/**
 * トップページ PRODUCTスライド
 */
export const initializeTopProductSlider = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".js-top-product-splide");

    if (!el) return;

    const splide = new Splide(el, {
      type: "loop",
      padding: { left: 0, right: "94rem" },
      gap: 32,
      perPage: 3,
      focus: 0,
      pagination: false,
      arrows: true,

      autoScroll: {
        speed: 0.5, // スクロール速度（数値が大きいほど速い）
        pauseOnHover: false, // マウスホバー時に一時停止するか
        pauseOnFocus: false, // フォーカス時に一時停止するか
      },

      breakpoints: {
        767: {
          perPage: 1,
          gap: 24,
          padding: { left: 0, right: "60rem" },
        },
      },
    });

    splide.mount(window.splide.Extensions);

    // 矢印ボタンを除外して、画像エリアだけホバーで止める設定 ---
    const track = el.querySelector(".splide__track");
    const autoScroll = splide.Components.AutoScroll;

    if (track && autoScroll) {
      // 画像エリア（track）にマウスが乗ったら停止
      track.addEventListener("mouseenter", () => {
        autoScroll.pause();
      });

      // 画像エリア（track）からマウスが外れたら再開
      track.addEventListener("mouseleave", () => {
        autoScroll.play();
      });
    }
  });
};
