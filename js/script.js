const toggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

if (toggle && sidebar) {
  toggle.onclick = () => sidebar.classList.toggle("open");

  document.onclick = (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  };
} else {
  console.warn("Sidebar or toggle button not found");
}

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.onclick = () => {
    const body = document.body;
    body.classList.toggle("light-mode");

    const isLight = body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
  };
} else {
  console.warn("Theme toggle button not found");
}
