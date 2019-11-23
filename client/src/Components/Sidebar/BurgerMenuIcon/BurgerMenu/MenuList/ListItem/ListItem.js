import React, { useEffect } from "react";
import { TimelineMax } from "gsap";

// Components
import { ListItemContainer, NumberText } from "./ListItem.styled";
import { TitleText } from "@Components/Reusables";

const ListItem = ({ Number, Title, Link, show }) => {
  useEffect(() => {
    let tl = new TimelineMax();
    if (show) {
      tl.set(".test", { opacity: 0 })
        .staggerFromTo(".test", 1, { y: 0, opacity: 0 }, { opacity: 1, y: "-=20" }, 0.15)
        .delay(0.5);
    }
  }, [show]);

  return (
    <ListItemContainer className={"test"}>
      <NumberText>{Number}</NumberText>
      {Link ? <TitleText myLink={Link}>{Title}</TitleText> : <TitleText>{Title}</TitleText>}
    </ListItemContainer>
  );
};

export default React.memo(ListItem);