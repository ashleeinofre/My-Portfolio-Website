function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});



const openBtn = document.getElementById("openmodal");
const closeBtn = document.getElementById("closemodal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

function closeModal() {
  modal.classList.remove("open");
}

document.querySelectorAll("#modal a").forEach(link => {
  link.addEventListener("click", () => {
    closeModal();
  });
});





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
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});