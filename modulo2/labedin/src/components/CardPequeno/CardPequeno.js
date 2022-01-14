import React from "react";
import "./CardPequeno.css";
import styled from 'styled-components';

const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;
`

const Image = styled.img`
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const CardPequeno = (props) => {
  return (
    <SmallContainer>
      <Image src={props.imagem} />
      <h4>{props.referencia}</h4>
      <p> {props.dadosReferencia}</p>
    </SmallContainer>
  )
}

export default CardPequeno