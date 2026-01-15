import { initializeBusinessMenuScroll } from "./component/business-menu-scroll.js";
import { initializeCtaBgSlider } from "./component/cta-bg-slider.js";
import { initializeHamburgerMenu } from "./component/hamburger-menu.js";
import { initializeHeaderDropdown } from "./component/header-dropdown.js";
import { initializeNewsArchives } from "./component/news-archives.js";
import { initializePageAnimation } from "./component/page-animation.js";
import { initializePageAnimation02 } from "./component/page-animation02.js";
import { initializeProductImage } from "./component/product-image.js";
import { initializeScrollToTop } from "./component/scroll-to-top.js";
import { initializeTopAnimateBusiness } from "./component/top-animate-business.js";
import { initializeTopAnimateKv } from "./component/top-animate-kv.js";
import { initializeTopAnimateNews } from "./component/top-animate-news.js";
import { initializeTopAnimateOthers } from "./component/top-animate-others.js";
import { initializeTopMainVisual } from "./component/top-main-visual.js";
import { initializeTopProductSlider } from "./component/top-product-slider.js";
import { switchViewport } from "./utility/switch-viewport.js";

// 各機能の初期化
initializeHeaderDropdown();
initializeHamburgerMenu();
initializeCtaBgSlider();
initializeScrollToTop();
initializeTopMainVisual();
initializeTopAnimateKv();
initializeTopAnimateNews();
initializeTopAnimateBusiness();
initializeTopProductSlider();
initializeTopAnimateOthers();
initializePageAnimation();
initializePageAnimation02();
initializeBusinessMenuScroll();
initializeProductImage();
initializeNewsArchives();

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);
