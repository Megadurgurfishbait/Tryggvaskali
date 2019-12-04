import { TimelineMax } from "gsap";

export default function Slide(Node) {
  const tl = new TimelineMax();

  let Animation;
  const [first, second] = Node;

  Animation = tl
    .delay(0.2)
    .fromTo(first.current, 0.8, { x: -40, opacity: 0 }, { x: 0, opacity: 1 }, "together")
    .fromTo(second.current, 0.8, { x: -40, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.7")
    .staggerFrom(".StutterLi", 0.8, { y: "+=30", opacity: 0 }, 0.15, "together");

  return Animation;
}
