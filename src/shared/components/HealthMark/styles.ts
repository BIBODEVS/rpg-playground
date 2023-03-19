import styled from "styled-components";

const getColor = (value: number, maxValue: number) => {
  const proportion = value / maxValue;
  if (proportion <= 0.3) {
    return "red";
  }
  if (proportion <= 0.6) {
    return "yellow";
  }
  return "green";
};

export const HealthMark = styled.div<{ value: number; maxValue: number }>`
  width: 100%;
  height: 24px;
  background-color: ${(props) => getColor(props.value, props.maxValue)};
`;
