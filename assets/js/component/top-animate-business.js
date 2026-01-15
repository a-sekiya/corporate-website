/**
 * トップページ Businessアニメーション
 */
export const initializeTopAnimateBusiness = () => {
  const box = document.querySelector(".js-top-business-inner");
  const image = document.querySelector(".js-top-business-image");
  const content = document.querySelector(".js-top-business-content");

  if (!box || !image || !content) return;

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      let { isMobile } = context.conditions;

      // 画像のアニメーション
      gsap.from(image, {
        x: isMobile ? 0 : -60,
        y: isMobile ? 20 : 0,
        opacity: 0,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: isMobile ? "top 95%" : "top 85%",
        },
      });

      // テキストのアニメーション
      gsap.from(content, {
        x: isMobile ? 0 : 60,
        y: isMobile ? 20 : 0,
        opacity: 0,
        duration: 2.0,
        delay: isMobile ? 0.3 : 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: isMobile ? "top 95%" : "top 85%",
        },
      });
    }
  );
};
