import { TimelineMax } from "gsap";

export default function ShowBurgerMenu(Node, height, width) {
  const tl = new TimelineMax({ paused: true });
  let Animation; 
  
console.log(height, width);
  Animation = tl
    .fromTo(Node, .5, { height: 0}, { height: `${height}` })
    .fromTo(Node, .5, { x: -width+120 }, { x: 60 });
  return Animation;
}
