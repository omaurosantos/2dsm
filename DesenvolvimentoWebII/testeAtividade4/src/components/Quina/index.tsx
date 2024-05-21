import React from "react";
import styled from "styled-components";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";

const QuinaBlocoPrincipal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
`;

const QuinaBlocoLoteria = styled.div`
    display: flex;
`;

const QuinaNomeLoteria = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #260085;
    margin-left: 10px;
`;

const QuinaBlocoEstimativa = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const QuinaTextoEstimativa = styled.div`
    font-size: 15px;
    color: #4c556c;
`;

const QuinaValorEstimativa = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #260085;
`;

const QuinaBlocoDireita = styled.div`
    margin-left: 50px;
`;

const QuinaLinhaBola = styled.div`
    display: flex;
`;

const QuinaBola = styled.div`
    font-size: 18px;
    font-weight: bold;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
    background-color: #260085;
    color: white;
`;

const QuinaTextoAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
`;

const QuinaDataConcurso = styled.div`
    color: #4c556c;
    padding-left: 15px;
    margin-top: 15px;
    font-size: 15px;
`;

export default function Quina() {
    const {quina} = useLoteria();
    
    return (
        <QuinaBlocoPrincipal>
            <div>
                <QuinaBlocoLoteria>
                    <img src={trevo} alt="" />
                    <QuinaNomeLoteria>QUINA</QuinaNomeLoteria>
                </QuinaBlocoLoteria>

                <QuinaBlocoEstimativa>
                    <QuinaTextoEstimativa>
                        Estimativa de prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}.
                    </QuinaTextoEstimativa>
                    <QuinaValorEstimativa>
                        {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style:"currency",
                            currency: "BRL",
                        })}
                    </QuinaValorEstimativa>
                </QuinaBlocoEstimativa>
            </div>
            <QuinaBlocoDireita>
                <QuinaLinhaBola>
                    {quina.dezenas.map( dezena =>
                        <QuinaBola key={dezena}>{dezena}</QuinaBola>
                    )}
                </QuinaLinhaBola>
                <QuinaTextoAcumulou>
                    {quina.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quina.quantidadeGanhadores} GANHADORES`}
                </QuinaTextoAcumulou>
                <QuinaDataConcurso>
                    {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
                </QuinaDataConcurso>
            </QuinaBlocoDireita>
        </QuinaBlocoPrincipal>
    );
}
