import styled from "styled-components";

export default function Block({ color, children }: any) {
  return <Sld color={color}>{children}</Sld>;
}

const Sld = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #aaa;
  background-color: ${(props) => props.color};
`;

interface Props {
  color: string;
}
