(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;

  const swiper = new Swiper(root.querySelector(".es-swiper"), {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoheight: true,

    // Navigation arrows
    navigation: {
      nextEl: root.querySelector(".es-swiper-button-next"),
      prevEl: root.querySelector(".es-swiper-button-prev"),
    },
  });
})();
