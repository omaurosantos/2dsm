import React from "react";
import styled from "styled-components";

import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";

const MegaBlocoPrincipal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;

const MegaBlocoLoteria = styled.div`
    display: flex;
`;

const MegaNomeLoteria = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #209869;
    margin-left: 10px;
`;

const MegaBlocoEstimativa = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const MegaTextoEstimativa = styled.div`
    font-size: 15px;
    color: #4c556c;
`;

const MegaValorEstimativa = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #209869;
`;

const MegaBlocoDireita = styled.div`
    margin-left: 50px;
`;

const MegaLinhaBola = styled.div`
    display: flex;
`;

const MegaBola = styled.div`
    font-size: 18px;
    font-weight: bold;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
    background-color: #209869;
    color: white;
`;

const MegaTextoAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
`;

const MegaDataConcurso = styled.div`
    color: #4c556c;
    padding-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`;

export default function Megasena() {
    const {megasena} = useLoteria();
    
    return (
        <MegaBlocoPrincipal>
            <div>
                <MegaBlocoLoteria>
                    <img src={trevo} alt="" />
                    <MegaNomeLoteria>MEGA-SENA</MegaNomeLoteria>
                </MegaBlocoLoteria>

                <MegaBlocoEstimativa>
                    <MegaTextoEstimativa>
                        Estimativa de prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}.
                    </MegaTextoEstimativa>
                    <MegaValorEstimativa>
                        {megasena.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style:"currency",
                            currency: "BRL",
                        })}
                    </MegaValorEstimativa>
                </MegaBlocoEstimativa>
            </div>
            <MegaBlocoDireita>
                <MegaLinhaBola>
                    {megasena.dezenas.map( dezena =>
                        <MegaBola key={dezena}>{dezena}</MegaBola>
                    )}
                </MegaLinhaBola>
                <MegaTextoAcumulou>
                    {megasena.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${megasena.quantidadeGanhadores} GANHADORES`}
                </MegaTextoAcumulou>
                <MegaDataConcurso>
                    {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
                </MegaDataConcurso>
            </MegaBlocoDireita>
        </MegaBlocoPrincipal>
    );
}
