// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  gestureDirection: "vertical",
  smoothTouch: true,
  touchMultiplier: 2
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Set z-index for images
document.querySelectorAll(".arch__right .img-wrapper").forEach((element) => {
  const order = element.getAttribute("data-index");
  if (order !== null) {
    element.style.zIndex = order;
  }
});

// Mobile layout handler (only handle order)
function handleMobileLayout() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const leftItems = gsap.utils.toArray(".arch__left .arch__info");
  const rightItems = gsap.utils.toArray(".arch__right .img-wrapper");

  if (isMobile) {
    // Interleave items using order
    leftItems.forEach((item, i) => {
      item.style.order = i * 2;
    });
    rightItems.forEach((item, i) => {
      item.style.order = i * 2 + 1;
    });
  } else {
    // Clear order for desktop
    leftItems.forEach((item) => {
      item.style.order = "";
    });
    rightItems.forEach((item) => {
      item.style.order = "";
    });
  }
}

// Debounce resize for performance
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleMobileLayout, 100);
});

// Run on initial load
handleMobileLayout();

const imgs = gsap.utils.toArray(".img-wrapper img, .img-wrapper video");
const bgColors = ["#EDF9FF", "#FFECF2", "#FFE8DB"];

// GSAP Animation with Media Query
ScrollTrigger.matchMedia({
  "(min-width: 769px)": function () {
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".arch",
        start: "top top",
        end: "bottom bottom",
        pin: ".arch__right",
        scrub: true
      }
    });

    gsap.set(imgs, {
      clipPath: "inset(0)",
      objectPosition: "0px 0%"
    });

    imgs.forEach((_, index) => {
      const currentImage = imgs[index];
      const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

      const sectionTimeline = gsap.timeline();

      if (nextImage) {
        sectionTimeline
          .to(
            "body",
            {
              backgroundColor: bgColors[index],
              duration: 1.5,
              ease: "power2.inOut"
            },
            0
          )
          .to(
            currentImage,
            {
              clipPath: "inset(0px 0px 100%)",
              objectPosition: "0px 60%",
              duration: 1.5,
              ease: "none"
            },
            0
          )
          .to(
            nextImage,
            {
              objectPosition: "0px 40%",
              duration: 1.5,
              ease: "none"
            },
            0
          );
      }

      mainTimeline.add(sectionTimeline);
    });
  },
  "(max-width: 768px)": function () {
    const mbTimeline = gsap.timeline();
    gsap.set(imgs, {
      objectPosition: "0px 60%"
    });

    imgs.forEach((image, index) => {
      const innerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top-=70% top+=50%",
          end: "bottom+=200% bottom",
          scrub: true
        }
      });

      innerTimeline
        .to(image, {
          objectPosition: "0px 30%",
          duration: 5,
          ease: "none"
        })
        .to("body", {
          backgroundColor: bgColors[index],
          duration: 1.5,
          ease: "power2.inOut"
        });

      mbTimeline.add(innerTimeline);
    });
  }
});

// ========== Platform Tab Switching ==========
(function () {
  const section = document.querySelector(".app-ui");
  const track = document.querySelector(".platform-tabs__track");
  const tabs = document.querySelectorAll(".platform-tab");
  if (!section || !track || !tabs.length) return;

  // Map from iOS image keys to Mac image keys
  const keyMap = {
    ui_home_img: "ui_home_img_mac",
    ui_rec_img: "ui_rec_img_mac",
    ui_logs_img: "ui_logs_img_mac",
    ui_future: "ui_future_mac"
  };

  let currentPlatform = "ios";

  function getLang() {
    return (
      (typeof languageManager !== "undefined" &&
        languageManager.getCurrentLanguage()) ||
      localStorage.getItem("preferredLanguage") ||
      "en"
    );
  }

  function swapSources(platform) {
    const lang = getLang();
    const t = translations[lang];
    if (!t || !t.images) return;

    const wrappers = section.querySelectorAll(".arch__right .img-wrapper");

    // 250ms fade out
    wrappers.forEach(function (w) {
      w.style.transition = "opacity 0.25s ease";
      w.style.opacity = "0";
    });

    setTimeout(function () {
      wrappers.forEach(function (w) {
        var video = w.querySelector("video");
        var img = w.querySelector("img[data-i18n-img]");

        if (platform === "mac") {
          // Hide video, show image with Mac source
          if (video) {
            video.pause();
            video.style.display = "none";
          }
          if (img) {
            var imgBaseKey = img.getAttribute("data-i18n-img");
            var macKey = keyMap[imgBaseKey] || imgBaseKey;
            var macSrc = t.images[macKey];
            if (macSrc) img.src = macSrc;
            img.style.display = "block";
          }
        } else {
          // Restore iOS: show video, restore image to iOS source
          if (video) {
            video.style.display = "";
            var source = video.querySelector("source[data-i18n-img]");
            if (source) {
              var iosSrc = t.images[source.getAttribute("data-i18n-img")];
              if (iosSrc) {
                source.src = iosSrc;
                video.load();
                video.play().catch(function () {});
              }
            }
          }
          if (img) {
            var iosImgKey = img.getAttribute("data-i18n-img");
            var iosSrc = t.images[iosImgKey];
            if (iosSrc) img.src = iosSrc;
            // Restore mobile-only visibility
            img.style.display = "";
          }
        }
      });

      // Fade back in
      wrappers.forEach(function (w) {
        w.style.opacity = "1";
      });
    }, 250);
  }

  function switchPlatform(platform) {
    if (platform === currentPlatform) return;
    currentPlatform = platform;

    // Toggle classes
    section.classList.toggle("platform-ios", platform === "ios");
    section.classList.toggle("platform-mac", platform === "mac");
    track.classList.toggle("mac-active", platform === "mac");

    // Update active tab
    tabs.forEach(function (tab) {
      tab.classList.toggle(
        "active",
        tab.getAttribute("data-platform") === platform
      );
    });

    // Swap media sources
    swapSources(platform);

    // Refresh ScrollTrigger after CSS transition completes
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 550);
  }

  // Tab click handlers
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      switchPlatform(tab.getAttribute("data-platform"));
    });
  });

  // Re-apply Mac sources after language switch
  window.addEventListener("languageChanged", function () {
    if (currentPlatform === "mac") {
      // Small delay to let the language manager finish updating DOM
      setTimeout(function () {
        swapSources("mac");
      }, 50);
    }
  });
})();