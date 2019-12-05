import { TimelineMax } from "gsap";
import { sizes } from "../Assets/Varibles/media";

export default function ShowBurgerMenu(Node, height, width) {
  const tl = new TimelineMax({ paused: true });
  let Animation;
  let widthpadding = width > sizes.phone ? 60 : 0;
  Animation = tl
    .set(Node, { height: `${height}` })
    .fromTo(Node, 0.2, { x: -width }, { x: widthpadding });
  return Animation;
}
