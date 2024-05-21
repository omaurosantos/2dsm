import React from "react";
import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import Timemania from "../components/Timemania";
import { useLoteria } from "../hooks";
import Menu from "../components/Menu";

export default function Principal() {
  const { megasena } = useLoteria();
  console.log("Principal", megasena);
  return (
    <>
      {megasena.dataApuracao ? (
        <>
          <Menu />
          <div className="principal-bloco">
            <Megasena />
            <Timemania />
            <Quina />
          </div>
        </>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
