/**
 * footer：ページトップへ戻る
 */
export const initializeScrollToTop = () => {
  const btn = document.querySelector(".js-footer-button");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
