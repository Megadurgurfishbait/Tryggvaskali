import styled from "styled-components";
import { Colors, Media, MediaHeight } from "@Assets/";

export const ListItemContainer = styled.li`
  height: 80px;
  width: 100%;
  margin: 5px auto;
  display: flex;
  color: ${Colors.LIGHT_BLUE};

  ${Media.large`height: 60px;`}
  ${Media.phone`height: 30px;`}
&:hover {
    cursor: pointer;
  }
`;

export const NumberText = styled.div`
  font-size: 12px;
  height: 20px;
  width: 20px;
  margin-top: auto;
  transform: translateX(-20px);
`;
