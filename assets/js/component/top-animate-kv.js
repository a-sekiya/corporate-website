/**
 * トップページ KVテキストのアニメーション
 */
export const initializeTopAnimateKv = () => {
  const title = document.querySelector(".js-top-kv-jp");
  const subtitle = document.querySelector(".js-top-kv-en");

  if (!title || !subtitle) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isMobile } = context.conditions;
      const tl = gsap.timeline();

      tl.from(title, {
        y: isMobile ? 15 : 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      }).from(
        subtitle,
        {
          y: 10,
          opacity: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        "-=1.2"
      );
    }
  );
};
