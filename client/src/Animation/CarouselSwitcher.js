import { TimelineMax } from "gsap";

export default function CaruselSwitcher(NodeArray, position, Direction) {
  console.log(position, Direction);
  const tl = new TimelineMax();
  let Animation;
  switch (position) {
    default : console.log()
        return tl.fromTo(NodeArray[0], .5, {x: 500, opacity: 0}, {x: 10, opacity: 1}).delay(1.5);
    case 0:
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ));
      break;
    case 1:console.log("Hér2", Direction);
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ));
      break;

    case 2: console.log("Hér3", Direction);
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[1],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ));
      break;

    case 3:console.log("Hér4", Direction);
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[2],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ));
      break;
    case 4:console.log("Hér5", Direction);
      Direction === "Right"
        ? (Animation = tl
            .fromTo(
              NodeArray[0],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ))
        : (Animation = tl
            .fromTo(
              NodeArray[3],
              0.5,
              { x: 10, opacity: 1 },
              { x: 500, opacity: 0 }
            )
            .fromTo(
              NodeArray[4],
              0.5,
              { x: 500, opacity: 0 },
              { x: 10, opacity: 1 }
            ));
      break;

            }
  return Animation;
}
