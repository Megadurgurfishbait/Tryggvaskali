import React, { useRef } from "react";

import SVG from "../../Assets/plate-fork-and-knife.svg";
import {
  LContainer,
  TextContainer,
  AnimationContainer,
  Table,
  Room,
  Disk,
  DiskSVG,
  Chair,
  ChairBack,
  ChairLegs,
  ChairSeat,
  WineGlas,
  Top,
  Bottom,
  BottomRing,
  Waiter,
  Arm,
  Head,
  Nose,
  ArmDisk,
  TopOfDisk,
  DiskPlate
} from "./Loading.styled";
import { TimelineMax, Linear } from "gsap";

const Loading = () => {
  const tl = new TimelineMax();
  let WaiterRef = useRef();
  let ArmRef = useRef();
  let HeadRef = useRef();
  let ArmDiskRef = useRef();
  let DiskPlateRef = useRef();
  let ContainerRef = useRef();

  React.useEffect(() => {
    /* Hreyfa þjón að borði */
    tl.delay(0.4);
    tl.fromTo(WaiterRef.current, 0.5, { y: 0, x: 0 }, { x: -60, y: -70 }, "WalkingWaiter");
    tl.fromTo(ArmDiskRef.current, 0.5, { y: -15, x: -60 }, { x: -113, y: -80 }, "WalkingWaiter");
    tl.fromTo(DiskPlateRef.current, 0.5, { y: -15, x: -60 }, { x: -113, y: -80 }, "WalkingWaiter");

    /*  Þjónn beygir sig fram með diskinn */

    tl.to(WaiterRef.current, 0.5, { height: "40px", width: "50px" }, "bend");
    tl.to(HeadRef.current, 0.5, { y: -20 }, "bend");
    tl.to(ArmRef.current, 0.5, { height: "75px", x: -5, y: -22 }, "bend");
    tl.to(ArmDiskRef.current, 0.5, { x: -133, y: -133 }, "bend");
    tl.to(DiskPlateRef.current, 0.5, { x: -134, y: -134 }, "bend");

    // Þjónn beygir sig aðeins tilbaka

    tl.to(WaiterRef.current, 0.5, { height: "30px", width: "55px" }, "bendback");
    tl.to(HeadRef.current, 0.5, { y: -10 }, "bendback");
    tl.to(ArmRef.current, 0.5, { height: "55px", x: 0, y: -15 }, "bendback");

    // Þjónn fer aðeins nær borðinu
    tl.to(WaiterRef.current, 0.5, { x: -70, y: -80 });
    // Þjónn hélt undir bakkann, en núna tekur hann "Dome'ið" af disknum, svo hendi
    // Fer fyrir ofan bakkann og domeið.
    tl.set(WaiterRef.current, { zIndex: 8 });

    // Hallar sér aftur fram til að ná í Domeið.
    tl.to(WaiterRef.current, 0.5, { height: "40px", width: "50px" }, "bendAgain");
    tl.to(HeadRef.current, 0.5, { y: -20 }, "bendAgain");
    tl.to(ArmRef.current, 0.5, { height: "80px", x: 2, y: -25 }, "bendAgain");

    // Búinn að ná gripi á dominu og tekur til baka Domeið.

    tl.to(WaiterRef.current, 0.6, { height: "25px", width: "60px" }, "bendBackwards");
    tl.to(HeadRef.current, 0.6, { y: 0 }, "bendBackwards");
    tl.to(ArmRef.current, 0.6, { height: "40px", x: 0, y: 0 }, "bendBackwards");
    tl.to(ArmDiskRef.current, 0.6, { x: -117, y: -90 }, "bendBackwards");

    // Zooma beint á diskinn.
    tl.set(DiskPlateRef.current, { zIndex: 50000 }, "-=.5");
    tl.fromTo(
      ContainerRef.current,
      0.7,
      { scale: 1, zIndex: 5, y: -0, x: 0 },
      {
        scale: 60,
        ease: Linear.easeNone,
        zIndex: 500000,
        y: -4500,
        x: -200
      },
      "-=.45"
    );
    // Fade'a inn síðuna
    tl.fromTo(ContainerRef.current, 0.3, { opacity: 1 }, { opacity: 0 }, "-=.35");
    tl.to(ContainerRef.current, 0.1, { height: 0, width: 0, scale: 0 });
  }, []);

  return (
    <LContainer ref={ContainerRef}>
      <TextContainer>
        <h1>Tryggvaskáli</h1>
        <h1>Restaurant</h1>
      </TextContainer>
      <AnimationContainer>
        <Room>
          <Table>
            <WineGlas top={"18%"} l={"38%"}>
              <Top>
                <BottomRing>
                  <Bottom />
                </BottomRing>
              </Top>
            </WineGlas>
            <WineGlas bottom={"18%"} l={"56%"}>
              <Top>
                <BottomRing>
                  <Bottom />
                </BottomRing>
              </Top>
            </WineGlas>
            <WineGlas top={"56%"} l={"19%"}>
              <Top>
                <BottomRing>
                  <Bottom />
                </BottomRing>
              </Top>
            </WineGlas>

            <WineGlas top={"38.5%"} l={"74%"}>
              <Top>
                <BottomRing>
                  <Bottom />
                </BottomRing>
              </Top>
            </WineGlas>
            <Disk top={"10px"} ml={"auto"} mr={"auto"}>
              <DiskSVG src={SVG} rotY={"180deg"} />
            </Disk>
            <Disk top={"50%"} r={"0px"}>
              <DiskSVG src={SVG} rotY={"-90deg"} />
            </Disk>
            <Disk top={"50%"} l={"0px"}>
              <DiskSVG src={SVG} rotY={"90deg"} />
            </Disk>
            <Disk bottom={"10px"} l={"auto"} r={"auto"}>
              <DiskSVG src={SVG} />
            </Disk>
          </Table>
          <Chair top={"50%"} r={"40px"}>
            <ChairLegs>
              <span />
              <span />
            </ChairLegs>
            <ChairSeat />
            <ChairBack />
          </Chair>
          <Chair top={"50%"} l={"40px"} rotY={"180deg"}>
            <ChairLegs>
              <span />
              <span />
            </ChairLegs>
            <ChairSeat />
            <ChairBack />
          </Chair>
          <Chair top={"59px"} l={"auto"} r={"auto"} rotY={"-90deg"}>
            <ChairLegs>
              <span />
              <span />
            </ChairLegs>
            <ChairSeat />
            <ChairBack />
          </Chair>
          <Chair bottom={"54px"} l={"auto"} r={"auto"} rotY={"90deg"}>
            <ChairLegs>
              <span />
              <span />
            </ChairLegs>
            <ChairSeat />
            <ChairBack />
          </Chair>
          <ArmDisk ref={ArmDiskRef}>
            <TopOfDisk />
          </ArmDisk>
          <DiskPlate ref={DiskPlateRef}></DiskPlate>

          <Waiter ref={WaiterRef}>
            <Arm ref={ArmRef}></Arm>
            <Head ref={HeadRef}>
              <Nose></Nose>
            </Head>
          </Waiter>
        </Room>
      </AnimationContainer>
    </LContainer>
  );
};

export default Loading;
