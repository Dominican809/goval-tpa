(function () {
  const root = document.querySelector(".impact");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".impact-slide"));
  const dots = Array.from(root.querySelectorAll(".impact-dot"));
  if (slides.length < 2) return;

  const DELAY = 5500;
  let index = 0;
  let timer = null;

  function show(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
    dots.forEach((d, k) => {
      d.classList.toggle("is-active", k === index);
      d.setAttribute("aria-selected", k === index ? "true" : "false");
    });
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    stop();
    timer = setInterval(() => show(index + 1), DELAY);
  }

  dots.forEach((d, k) => {
    d.addEventListener("click", () => {
      show(k);
      start();
    });
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);

  show(0);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
})();
