import { TimelineMax } from "gsap";

export default function ShowBurgerMenu(Node, height, width) {
  const tl = new TimelineMax({ paused: true });
  let Animation; 
  
console.log(height, width);
  Animation = tl
    .fromTo(Node, 1, { height: 0}, { height: `${height}` })
    .fromTo(Node, 1, { x: 0 }, { x: `${-width+60}` });

  return Animation;
}
