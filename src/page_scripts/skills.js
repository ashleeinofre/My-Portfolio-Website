new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    940: {
      slidesPerView: 2
    },
    1320: {
      slidesPerView: 3
    },
  }
});




document.querySelectorAll(".skill-more").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();

    const card = btn.closest(".s-card");
    if (!card) return;

    const more = btn.querySelector(".see-more");
    const less = btn.querySelector(".see-less");

    const isOpen = card.classList.contains("active");

    card.classList.toggle("active", !isOpen);
    more.classList.toggle("hidden", !isOpen);
    less.classList.toggle("hidden", isOpen);
  });
});


