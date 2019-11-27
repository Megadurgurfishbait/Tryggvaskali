import { TimelineMax } from "gsap";

export default function Slide(Node) {
  const tl = new TimelineMax();

  let Animation;

  Animation = tl
    .set(Node.current, { opacity: 0 })
    .fromTo(Node.current, 0.8, { opacity: 0 }, { opacity: 1 });

  return Animation;
}
