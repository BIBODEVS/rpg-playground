import styled, { css } from "styled-components";
import { Space } from "antd";

export const PlaygroundWrapper = styled(Space)`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
`;

export const Playfield = styled.div<{ isInvert: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  ${(props) =>
    props.isInvert &&
    css`
      flex-direction: column-reverse;
    `}
`;
