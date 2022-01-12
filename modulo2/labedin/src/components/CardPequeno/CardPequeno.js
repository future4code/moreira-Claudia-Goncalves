import React from "react";
import "./CardPequeno.css"


const CardPequeno = (props) => {
  return (
    <div className="smallcard-Container">
      <img src={props.imagem} />
      <h4>{props.referencia}</h4>
      <p>{props.dadosReferencia}</p>
    </div>
  )
}

export default CardPequeno