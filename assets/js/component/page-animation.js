/**
 * 下層ページのタイトルアニメーション
 */
export const initializePageAnimation = () => {
  const en = document.querySelectorAll(".js-page-title-en");
  const jp = document.querySelector(".js-page-title-jp");

  if (!en || !jp) return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  tl.from([en, jp], {
    y: 20,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2,
  });
};
