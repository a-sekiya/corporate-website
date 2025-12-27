/**
 * ビューポートの設定を切り替え
 * 画面の幅が380px未満の場合：ビューポートを380pxに固定
 * それ以上の場合：デバイスの幅に基づいてビューポートを設定
 */
const switchViewport = () => {
  // ビューポート要素を取得
  const viewportMeta = document.querySelector('meta[name="viewport"]');

  // 条件に基づいて適用するビューポートの設定を決定
  const viewportContent = window.outerWidth > 380 ? "width=device-width, initial-scale=1" : "width=380";

  // ビューポート要素が存在しない場合はreturn
  if (!viewportMeta) return;

  // 現在のビューポートの設定が目的の設定と異なる場合にのみ、新しい設定を適用します。
  if (viewportMeta.getAttribute("content") !== viewportContent) {
    viewportMeta.setAttribute("content", viewportContent);
  }
};
switchViewport();
window.addEventListener("resize", switchViewport);

/**
 * ハンバーガーメニュー
 */
const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  // コンテンツ Opening Keyframe
  const contentsOpeningKeyframes = {
    opacity: [0, 1],
  };

  // コンテンツ Opening Option
  const contentsOpeningOptions = {
    duration: 200,
    easing: "ease-out",
  };

  // コンテンツ Closing Keyframe
  const contentsClosingKeyframes = {
    opacity: [1, 0],
  };

  // コンテンツ Closing Option
  const contentsClosingOptions = {
    duration: 200,
    easing: "ease-out",
  };

  // menuとopenButtonがページ内にない場合returnする
  if (!menu || !openButton) return;

  // メニューopenする関数
  const openMenu = () => {
    menu.showModal();
    openButton.classList.add("is-open");
    menu.animate(contentsOpeningKeyframes, contentsOpeningOptions);
  };

  // メニューcloseする関数
  const closeMenu = () => {
    const closingAnim = menu.animate(contentsClosingKeyframes, contentsClosingOptions);
    openButton.classList.remove("is-open");

    // アニメーションの完了後
    closingAnim.onfinish = () => {
      menu.close();
    };
  };

  // ボタンクリックでopen
  openButton.addEventListener("click", () => {
    openMenu();
  });

  // クローズボタンクリックでclose
  closeButton.addEventListener("click", () => {
    closeMenu();
  });

  // Escapeキーを押すと非表示
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
    }
  });
};
initializeHamburgerMenu();

/**
 * トップページKVスライド
 */
const initializeTopMainVisual = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // スライダーの存在を確認してから実行
    const el = document.querySelector(".js-top-kv-splide");

    // トップのスライドがページ内にない場合returnする
    if (!el) return;

    if (el) {
      const splide = new Splide(el, {
        type: "fade", // 左右に流さず、その場で切り替える
        rewind: true, // 最後まで行ったら最初に戻る
        speed: 3000, // 切り替わりの時間（3秒かけてじわ〜っと）
        interval: 5000, // 次のスライドまでの待ち時間（5秒）
        autoplay: true, // 自動再生
        pauseOnHover: false, // マウスを乗せても止めない
        arrows: false, // 左右の矢印を消す
        pagination: false, // 下のドットを消す
      });

      splide.mount();
    }
  });
};
initializeTopMainVisual();
