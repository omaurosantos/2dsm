import styled from "styled-components";
import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";
import CMYK from "./pages/CMYK";

function App() {
  return (
  <WrapperSld>
    <RGB />
    <HSLA />
    <CMYK />
    </WrapperSld>);
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export default App;
