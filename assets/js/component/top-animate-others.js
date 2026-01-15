/**
 * トップページ 会社概要・代表挨拶・アクセスのアニメーション
 */
export const initializeTopAnimateOthers = () => {
  const item = document.querySelectorAll(".js-top-others-item");
  const list = document.querySelector(".js-top-others-list");

  if (!item || !list) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      let { isMobile } = context.conditions;

      if (isMobile) {
        gsap.utils.toArray(item).forEach((item) => {
          gsap.from(item, {
            y: 20,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          });
        });
      } else {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: list,
            start: "top 85%",
          },
        });
      }
    }
  );
};
