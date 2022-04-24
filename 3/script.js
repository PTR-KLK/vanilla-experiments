gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".section__first",
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".section__first",
      start: "top center",
    },
    duration: 1,
    opacity: 1,
  }
);

gsap.fromTo(
  ".section__second",
  { opacity: 0, x: "105%" },
  {
    scrollTrigger: {
      trigger: ".section__second",

      start: "top center",
    },
    duration: 1,
    x: 0,
    opacity: 1,
  }
);

gsap.fromTo(
  ".section__third",
  { opacity: 1, x: 0 },
  {
    scrollTrigger: {
      trigger: ".section__third",
      start: "top center",
    },
    duration: 1,
    delay: 1,
    x: "105%",
    opacity: 0,
  }
);
