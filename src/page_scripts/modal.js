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

