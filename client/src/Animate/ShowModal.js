import { TimelineMax } from "gsap";

export default function ShowModalAnimation(Node, otherNode) {
  const tl = new TimelineMax({ paused: true });
  const time = 0.6;

  tl.fromTo(Node, time, { opacity: 0 }, { opacity: 1 }, "together");
  tl.fromTo(Node, time, { scale: 0 }, { scale: 1 }, "together-=.4");
  tl.to(otherNode, time, { opacity: 1 });

  return tl;
}
