import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";
import RGB from "../pages/RGB";
import HSLA from "../pages/HSLA";
import CMYK from "../pages/CMYK";
import { RGBProvider } from "../contexts/RGBContext";
import { CMYKProvider } from "../contexts/CMYKContext";
import { HSLAProvider } from "../contexts/HSLAContext";

export default function Rotas() {
  return (
    <RGBProvider>
    <CMYKProvider>
    <HSLAProvider>
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>
            <Route path="/RGB" element={<RGB/>} />
            <Route path="/HSLA" element={<HSLA/>} />
            <Route path="/CMYK" element={<CMYK/>} />
          </Routes>
        </BodySld>
      </BrowserRouter>
    </PageSld>
    </HSLAProvider>
    </CMYKProvider>
    </RGBProvider>
  );
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute; /* Alterado para position: absolute */
  top: calc(
    50% + 60px
  ); /* Posiciona o elemento no meio verticalmente e Ajusta o valor para compensar a altura do menu */
  left: 50%; /* Posiciona o elemento no meio horizontalmente */
  transform: translate(
    -50%,
    -50%
  ); /* Move o elemento de volta metade de sua própria largura e altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
