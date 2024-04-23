import styled from "styled-components";
import Rotas from "./routes";

export default function App() {
  return (
    <Rotas/>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
