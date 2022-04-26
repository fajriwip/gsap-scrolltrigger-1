import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

const countUp = (self) => {
  $(".number").text(Math.round(self.progress * 100));
};

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    // trigger element - viewport
    start: "top top",
    end: "bottom bottom",
    ease: "none",
    scrub: 1,
    onUpdate: countUp
  }
});
tl.to(".land-image_photo", {
  width: "100%",
  left: "0%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  height: "50%",
  top: "50%",
  duration: 1
});
tl.to(".land-image_photo", {
  width: "60%",
  left: "0%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  height: "25%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  width: "30%",
  left: "30%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  height: "12.5%",
  top: "62.5%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  width: "15%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  height: "6.25%",
  top: "62.5%",
  duration: 1,
  ease: "none"
});
tl.to(".land-image_photo", {
  width: "7.5%",
  left: "37.5%",
  duration: 1,
  ease: "none"
});
tl.to(
  ".land-image_img",
  {
    left: "-50%",
    scale: 3,
    duration: 9,
    ease: "none"
  },
  0
);
tl.from(
  ".left-section_text",
  {
    opacity: 0,
    top: "2em",
    duration: 0.5,
    ease: "power2.out"
  },
  1
);
