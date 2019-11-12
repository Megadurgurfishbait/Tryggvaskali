import { TimelineMax } from "gsap";

export default function ShowBurgerMenu(Node, height, width) {
  const tl = new TimelineMax({ paused: true });
  let Animation; 
  
console.log(height, width);
  Animation = tl
    .fromTo(Node, 0, { height: 0}, { height: `${height}` })
    .fromTo(Node, 0, { x: 0 }, { x: `${-width+60}` });

  return Animation;
}
