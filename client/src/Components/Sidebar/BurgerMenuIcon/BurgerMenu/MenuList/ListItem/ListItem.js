import React, { useEffect } from "react";
import { TimelineMax } from "gsap";

// Components
import { ListItemContainer, NumberText, LinkContainer, Span } from "./ListItem.styled";
import { TitleText } from "@Components/Reusables";
import { WhatWeDoSelectionContext } from "@Context/WhatWeDoSelection";

const ListItem = ({ Number, Title, Link, show, setShow, nestedRoute, href }) => {
  const { setSelection } = React.useContext(WhatWeDoSelectionContext);

  useEffect(() => {
    let tl = new TimelineMax();
    if (show) {
      tl.set(".test", { opacity: 0 })
        .staggerFromTo(".test", 1, { y: 0, opacity: 0 }, { opacity: 1, y: "-=20" }, 0.12)
        .delay(0.5);
    }
  }, [show]);

  const HandleClick = () => {
    setShow(!show);
    setSelection(nestedRoute);
  };

  return (
    <ListItemContainer onClick={HandleClick} className={"test"}>
      <NumberText>{Number}</NumberText>
      {Link && <TitleText myLink={Link}>{Title}</TitleText>}
      {href && (
        <LinkContainer target='_blank' href={href}>
          <Span>{Title}</Span>
        </LinkContainer>
      )}
    </ListItemContainer>
  );
};

export default React.memo(ListItem);
