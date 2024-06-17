import React from "react";
import styled from "styled-components";

interface AcumulouProps {
  quantidadeGanhadores: number;
  theme: any; // Adicionamos a propriedade theme ao tipo de props
}

const AcumulouText = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;
  padding-left: 15px;
  color: ${({ theme }) => theme.acumulou}; // Usamos o theme para acessar a cor acumulou
`;

const Acumulou: React.FC<AcumulouProps> = ({ quantidadeGanhadores, theme }) => {
  return (
    <AcumulouText theme={theme}>
      {quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quantidadeGanhadores} GANHADORES`}
    </AcumulouText>
  );
};

export default Acumulou;
