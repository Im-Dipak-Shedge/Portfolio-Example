document.addEventListener("DOMContentLoaded", () => {
  //=============== Toggle style switcher=========================================================

  let styleswitchToggler = document.querySelector(".style-switcher-toggler");
  styleswitchToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });

  //=============== Hide-Toggle style switcher while scrolling =========================================================

  window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open");
    }
  });

  //=============== theme color style selecting=========================================================
  function myfun(color_name) {
    document.documentElement.style.setProperty("--skin-color", color_name);
    document.querySelector(".style-switcher").classList.remove("open");
  }

  document.querySelector(".color-1").addEventListener("click", function () {
    myfun("#ec1839");
  });
  document.querySelector(".color-2").addEventListener("click", function () {
    myfun("#fa5b0f");
  });
  document.querySelector(".color-3").addEventListener("click", function () {
    myfun("#37b182");
  });
  document.querySelector(".color-4").addEventListener("click", function () {
    myfun("#1854b4");
  });

  //=============== theme Light and Dark selecting=========================================================
  let dayNight = document.querySelector(".day-night");
  dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    if (dayNight.querySelector("i").classList.contains("fa-sun")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  });

  //Declaring variables
  const toggleBtn = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");
  const mediaQuery = window.matchMedia("(width<1199px)");
  const navlink = document.querySelectorAll(".nav a");

  //Scrolling as per selection in sidebar
  navlink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navlink.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");

      let target = link.href.split("#")[1];
      let targetElement = document.getElementById(target);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
      if (mediaQuery.matches) {
        aside.style.left = "-270px";
        toggleBtn.style.display = "flex";
      } else {
        toggleBtn.style.display = "none";
        aside.style.left = "0px";
      }
    });
  });

  //nav-togller for Lesser views

  toggleBtn.addEventListener("click", () => {
    aside.style.left = "0px";
    toggleBtn.style.display = "none";
  });

  window.addEventListener("resize", () => {
    if (mediaQuery.matches) {
      toggleBtn.style.display = "flex";
      aside.style.left = "-270px";
    } else {
      toggleBtn.style.display = "none";
      aside.style.left = "0px";
    }
  });
});
