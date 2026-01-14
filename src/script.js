function toggleDarkMode() {
  const html = document.documentElement;
  const icon = document.getElementById("ModeIcon");

  html.classList.toggle("dark");

  icon.src = html.classList.contains("dark")
    ? "../Images/sun.png"
    : "../Images/crescent-moon.png";
}

