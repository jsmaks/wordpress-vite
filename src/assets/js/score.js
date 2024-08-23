import gsap, { Power1 } from 'gsap';

const items = document.querySelectorAll('.count');

gsap.from(items, {
  textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
});
