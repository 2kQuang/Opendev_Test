document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    loop: true, 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
});

Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: [
            "play",
            "fullscreen",
            "close"
        ]
    }
});