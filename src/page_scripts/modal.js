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
  link.addEventListener("click", (e) => {
    // Resume button needs second tap
    if (link.closest("#resume-btn") && link.dataset.armed === "false") {
      e.preventDefault();
      return;
    }

    closeModal();
  });
});


