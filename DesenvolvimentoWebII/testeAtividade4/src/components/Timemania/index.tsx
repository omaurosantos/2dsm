import React from "react";
import styled from "styled-components";
import trevo from "../../assets/trevo_timemania.png";
import { useLoteria } from "../../hooks";

const TimeManiaBlocoPrincipal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;

const TimeManiaBlocoLoteria = styled.div`
    display: flex;
`;

const TimeManiaNomeLoteria = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #00ff48;
    margin-left: 10px;
`;

const TimeManiaBlocoEstimativa = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const TimeManiaTextoEstimativa = styled.div`
    font-size: 15px;
    color: #4c556c;
`;

const TimeManiaValorEstimativa = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #00ff48;
`;

const TimeManiaBlocoDireita = styled.div`
    margin-left: 50px;
`;

const TimeManiaLinhaBola = styled.div`
    display: flex;
`;

const TimeManiaBola = styled.div`
    font-size: 20px;
    font-weight: bold;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
    color: #049645;
    background-color: #FFF600;
`;

const TimeManiaTextoAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
`;

const TimeManiaDataConcurso = styled.div`
    color: #4c556c;
    padding-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`;

export default function Timemania() {
    const {timemania} = useLoteria();

    return(
        <TimeManiaBlocoPrincipal>
            <div>
                <TimeManiaBlocoLoteria>
                    <img src={trevo} alt="" />
                    <TimeManiaNomeLoteria>TIMEMANIA</TimeManiaNomeLoteria>
                </TimeManiaBlocoLoteria>

                <TimeManiaBlocoEstimativa>
                    <TimeManiaTextoEstimativa>
                        Estimativa de prêmio do próximo concurso. Sorteio em {timemania.dataProximoConcurso}.
                    </TimeManiaTextoEstimativa>
                    <TimeManiaValorEstimativa>
                        {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style:"currency",
                            currency: "BRL",
                        })}
                    </TimeManiaValorEstimativa>
                </TimeManiaBlocoEstimativa>
            </div>
            <TimeManiaBlocoDireita>
                <TimeManiaLinhaBola>
                    {timemania.dezenas.map( dezena =>
                        <TimeManiaBola key={dezena}>{dezena}</TimeManiaBola>
                    )}
                </TimeManiaLinhaBola>
                <TimeManiaTextoAcumulou>
                    {timemania.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${timemania.quantidadeGanhadores} GANHADORES`}
                </TimeManiaTextoAcumulou>
                <TimeManiaDataConcurso>
                    {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
                </TimeManiaDataConcurso>
            </TimeManiaBlocoDireita>
        </TimeManiaBlocoPrincipal>
    );
}
