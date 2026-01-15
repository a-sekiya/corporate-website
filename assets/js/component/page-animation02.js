/**
 * 下層ページのタイトルと画像のアニメーション
 */
export const initializePageAnimation02 = () => {
  const title = document.querySelector(".js-page-title-row");
  const subTitle = document.querySelector(".js-page-title-sub");
  const image = document.querySelector(".js-page-kv-image");

  if (!title || !subTitle || !image) return;

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();
  const tl = gsap.timeline();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      let { isDesktop } = context.conditions;

      tl.from([title, subTitle], {
        y: isDesktop ? 20 : 15,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }).from(
        image,
        {
          y: isDesktop ? 0 : 20,
          x: isDesktop ? 30 : 0,
          opacity: 0,
          scale: 1.05,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }
  );
};
