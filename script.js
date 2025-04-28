const arrows = document.querySelectorAll(".arrow");
const wrappers = document.querySelectorAll(".movie-list-wrapper");

arrows.forEach((arrow, i) => {
  const wrapper = wrappers[i];
  const movieList = wrapper.querySelector(".movie-list");

  let clickCounter = 0;
  const items = movieList.querySelectorAll(".movie-list-item").length;
  const itemWidth = 300;

  arrow.addEventListener("click", () => {
    const maxScrolls = items - Math.floor(wrapper.offsetWidth / itemWidth);
    if (clickCounter < maxScrolls) {
      clickCounter++;
      movieList.style.transform = `translateX(${-clickCounter * itemWidth}px)`;
    } else {
      movieList.style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

const setDarkMode = (enabled) => {
  items.forEach((item) => item.classList.toggle("active", enabled));
  ball.classList.toggle("active", enabled);
  localStorage.setItem("darkMode", enabled);
};

const isDark = localStorage.getItem("darkMode") === "true";
setDarkMode(isDark);

ball.addEventListener("click", () => {
  setDarkMode(!ball.classList.contains("active"));
});