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




document.addEventListener("DOMContentLoaded", function () {
    if (innerWidth > 768) return;

    const btn = document.getElementById("resume-btn");
    if (!btn) return;

    const a = btn.querySelector("a");
    const d = btn.querySelector(".default-resume");
    const h = btn.querySelector(".hover-resume");
    const href = a.getAttribute("href");

    let active = false, t;

    a.removeAttribute("href");
    a.removeAttribute("download");

    a.onclick = function (e) {
      if (!active) {
        e.preventDefault();
        active = true;

        d.style.display = "none";
        h.style.display = "inline";
        a.setAttribute("href", href);
        a.setAttribute("download", "");

        t = setTimeout(function () {
          active = false;
          h.style.display = "none";
          d.style.display = "inline";
          a.removeAttribute("href");
          a.removeAttribute("download");
        }, 2500);
      } else {
        clearTimeout(t);
        setTimeout(function () {
          active = false;
          h.style.display = "none";
          d.style.display = "inline";
          a.removeAttribute("href");
          a.removeAttribute("download");
        }, 300);
      }
    };
  });