(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;

  const nextBtn = root.querySelector(".es-swiper-button-next");
  const prevBtn = root.querySelector(".es-swiper-button-prev");

  const swiper = new Swiper(root.querySelector(".es-swiper"), {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: root.querySelector(".es-swiper-button-next"),
      prevEl: root.querySelector(".es-swiper-button-prev"),
    },

    on: {
      slideChange: function () {
        // Hide both by default
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
        // Show next on first slide (index 0)
        if (this.activeIndex === 0) {
          nextBtn.style.display = "";
        }
        // Show prev on second slide (index 1)
        if (this.activeIndex === 1) {
          prevBtn.style.display = "";
        }
      },
    },
  });
  swiper.emit("slideChange");
})();
