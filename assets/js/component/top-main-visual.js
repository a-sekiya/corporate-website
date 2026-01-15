/**
 * トップページKVスライド
 */
export const initializeTopMainVisual = () => {
  const el = document.querySelector(".js-top-kv-splide");
  if (!el) return;

  const INTERVAL = 10000;

  const splide = new Splide(el, {
    type: "fade",
    rewind: true,
    speed: 2000,
    interval: INTERVAL,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
  });

  const numberEl = document.querySelector(".js-top-kv-circle-num");
  const progressCircle = document.querySelector(".js-top-kv-circle-progress");
  if (!numberEl || !progressCircle) return;

  const CIRCUMFERENCE = 301;

  const startProgress = () => {
    progressCircle.style.transition = "none";
    progressCircle.style.strokeDashoffset = CIRCUMFERENCE;

    requestAnimationFrame(() => {
      progressCircle.style.transition = `stroke-dashoffset ${INTERVAL}ms linear`;
      progressCircle.style.strokeDashoffset = 0;
    });
  };

  splide.on("mounted", () => {
    const index = splide.index;
    numberEl.textContent = (index + 1).toString().padStart(2, "0");
    startProgress();
  });

  splide.on("move", (newIndex) => {
    numberEl.textContent = (newIndex + 1).toString().padStart(2, "0");
    startProgress();
  });

  splide.mount();
};
