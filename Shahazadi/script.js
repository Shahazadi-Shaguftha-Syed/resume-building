const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️ Light";
} 

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});


