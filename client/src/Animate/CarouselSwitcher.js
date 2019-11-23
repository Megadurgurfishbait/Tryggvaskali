import { TimelineMax } from "gsap";

export default function CaruselSwitcher(NodeArray, position, Direction) {
  const tl = new TimelineMax();
  let Animation;
  switch (position) {
    default:
      return tl
        .fromTo(
          NodeArray[0],
          0.5,
          { x: 300, opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .delay(1);
    case 0:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ));
      break;
    case 1:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ));
      break;

    case 2:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ));
      break;

    case 3:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ));
      break;
    case 4:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 0, opacity: 1 },
              { x: 300, opacity: 0 }
            )
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 300, opacity: 0 },
              { x: 0, opacity: 1 }
            ));
      break;
  }
  return Animation;
}
