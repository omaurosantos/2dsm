import React from "react";
import styled, { useTheme } from "styled-components"; // Importe useTheme para acessar o tema
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";
import Acumulou from "../Principal/Direita/Acumulou"; // Importe o componente Acumulou
import Data from "../Principal/Direita/Data"; // Importe o componente Data

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();
  const theme = useTheme(); // Use useTheme para acessar o tema

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu />
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Trevo da Megasena" />
          {/* Passando o tema específico da Mega Sena para NomeLoteria */}
          <NomeLoteria loteria={theme.loteria} />
        </div>
        {/* Passando o tema específico da Mega Sena para Estimativa */}
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={theme.estimativa}
        />
      </div>
      <div className="mega-bloco-direita">
        <LinhaSld>
          {megasena.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={theme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        {/* Passando o tema para o componente Acumulou */}
        <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} theme={theme} />
        {/* Passando o tema para o componente Data */}
        <Data data={`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`} theme={theme} />
      </div>
    </div>
  );
};

export default Megasena;

const LinhaSld = styled.div`
  display: flex;
`;

const DezenaSld = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bola};
  color: ${({ theme }) => theme.bolafonte};
  border-radius: 25px;
  padding: 10px;
  margin: 0px 10px;
`;

