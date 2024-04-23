import styled from "styled-components";
import Logo from "../Logo";
import ItemMenu from "../ItemMenu";

export default function Menu() {
  return (
    <Sld>
      <Logo />
      <RightSld>
        <ItemMenu link="/rgb">RGB</ItemMenu>
        <ItemMenu link="/hsla">HSLA</ItemMenu>
        <ItemMenu link="/cmyk">CMYK</ItemMenu>
      </RightSld>
    </Sld>
  );
}

const Sld = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1000; /* Para garantir que o menu esteja acima de outros elementos */
  border-bottom: 1px solid #aaa;
  background-color: #ffe;
  box-sizing: border-box;
`;

const RightSld = styled.div`
  display: flex;
  flex-direction: row;
`;
