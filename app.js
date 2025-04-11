const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});