import { TimelineMax } from "gsap";
import { sizes } from "../Assets/Varibles/media";

export default function ShowModalAnimation(Node, otherNode, ModalHeight) {
  const tl = new TimelineMax({ paused: true });
  const time = 0.8;

  tl.set(Node, { zIndex: 500000000000000000000000000000000000000 });
  tl.fromTo(Node, time, { opacity: 0 }, { opacity: 1 }, "together");
  tl.fromTo(Node, time, { scale: 0 }, { scale: 1 }, "together-=.4");
  tl.to(otherNode, time, { opacity: 1 });

  return tl;
}
