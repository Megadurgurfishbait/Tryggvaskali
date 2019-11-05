import { TimelineMax } from "gsap";

export default function Slide(Node) {
  const tl = new TimelineMax();

  let Animation;


  Animation = tl
    .fromTo(Node.current, 0.8, { x: 400, opacity: 0 }, { x: 0, opacity: 1 })

  return Animation;
}
