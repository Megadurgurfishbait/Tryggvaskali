import { TimelineMax } from "gsap";

export default function ShowBurgerMenu(Node, height, width) {
  const tl = new TimelineMax({ paused: true });
  let Animation;

  Animation = tl
    .to(Node, .5, { height: `${height}` })
    .fromTo(Node, .6, { x: 0 }, { x: `${-width}` });

  return Animation;
}
