/**
 * トップページ Newsアニメーション
 */
export const initializeTopAnimateNews = () => {
  const item = document.querySelectorAll(".js-post-news");
  const list = document.querySelector(".js-posts-news");

  if (!item || !list) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      // メディアクエリの設定
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isMobile } = context.conditions;

      gsap.from(item, {
        // SPのときは10、PCのときは40
        y: isMobile ? 10 : 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list,
          // 発火タイミングもSPは少し遅め（画面の下の方）にすると自然です
          start: isMobile ? "top 90%" : "top 85%",
        },
      });
    }
  );
};
