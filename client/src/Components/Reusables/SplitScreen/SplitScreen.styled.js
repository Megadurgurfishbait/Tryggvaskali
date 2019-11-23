import styled from "styled-components";

export const SSContainer = styled.div`
  display: flex;
  background-size: cover;

  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ compJc }) => compJc};
  background-color: ${({ compBg }) => compBg};
  align-items: ${({ compAi }) => compAi};
  background-image: url(${({ bgImage }) => bgImage});
  height: ${({ compHeight }) => compHeight}%;
  width: ${({ compWidth }) => compWidth}%;
`;
