import { TimelineMax } from "gsap";

export default function ShowModal(Node) {
  const tl = new TimelineMax({ paused: true });
  let [Modal, OpacityModal] = Node.current;
  const WidthofModal = 1000;
  let Animation;

  Animation = tl
    .fromTo(
      Modal.current,
      0,
      { width: 0, x: 0 },
      { width: WidthofModal, x: -WidthofModal / 2 }
    )
    .fromTo(Modal.current, 0, { height: 0, y: 0 }, { height: 600, y: -700 })
    .fromTo(OpacityModal.current, 0, { opacity: 0 }, { opacity: 1 });

  return Animation;
}
