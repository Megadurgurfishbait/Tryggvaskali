import { TimelineMax } from "gsap";

export default function Slide(Node) {
  const tl = new TimelineMax();

  let Animation;
  const [first, second] = Node;

  Animation = tl
    .fromTo(first.current, 0.8, { x: -40, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo(
      second.current,
      0.8,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1 },
      "-=0.7"
    );

  return Animation;
}
