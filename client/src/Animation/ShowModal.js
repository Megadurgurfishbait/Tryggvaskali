import { TimelineMax } from "gsap";
import { sizes } from "../Assets/Varibles/media";

export default function ShowModal(Node, windowSize) {
  const tl = new TimelineMax({ paused: true });
  let [Modal, OpacityModal] = Node.current;
  const WidthofModal = 600;
  const time = .8;
  let Animation;
  

  if(windowSize.width > sizes.desktop) {
    Animation = tl
    .fromTo(
      Modal.current,
      time,
      { width: 0, x: 0 },
      { width: WidthofModal, x: -WidthofModal / 2 }
    )
    .fromTo(Modal.current, time, { height: 0, y: 0 }, { height: 700, y: -800 })
    .fromTo(OpacityModal.current, time, { opacity: 0 }, { opacity: 1 });
  }else {
    Animation = tl
    .fromTo(
      Modal.current,
      time,
      { width: 0, x: 0 },
      { width: windowSize.width, x: -windowSize.width / 2 }
    )
    .fromTo(Modal.current, time, { height: 0, y: 0}, { height: windowSize.height*.9, y: -windowSize.height*.8})
    .fromTo(OpacityModal.current, time, { opacity: 0 }, { opacity: 1 });
  }





  return Animation;
}
