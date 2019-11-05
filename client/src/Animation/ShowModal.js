import { TimelineMax } from "gsap";

export default function ShowModal(Node) {
  const tl = new TimelineMax({ paused: true });
  let [Modal, OpacityModal] = Node.current;
  const WidthofModal = 600;
  const time = .8;
  let Animation;
  

  Animation = tl
    .fromTo(
      Modal.current,
      time,
      { width: 0, x: 0 },
      { width: WidthofModal, x: -WidthofModal / 2 }
    )
    .fromTo(Modal.current, time, { height: 0, y: 0 }, { height: 700, y: -800 })
    .fromTo(OpacityModal.current, time, { opacity: 0 }, { opacity: 1 });

  return Animation;
}
