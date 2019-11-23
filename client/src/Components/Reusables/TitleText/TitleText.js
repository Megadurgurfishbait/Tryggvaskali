import React from "react";

// Components
import { TTContainer, LinkContainer, Span } from "./TitleText.styled";

const TitleText = ({ children, myLink, fontSize }) => (
  <>
    {myLink ? (
      <LinkContainer to={myLink}>
        <Span>{children}</Span>
      </LinkContainer>
    ) : (
      <TTContainer>
        <Span fontSize={fontSize}>{children}</Span>
      </TTContainer>
    )}
  </>
);

export default React.memo(TitleText);
