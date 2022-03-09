import React from 'react'
import styled from 'styled-components'

const DivCardPequeno = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  height: 60px;
  width: 41%;
  margin: 10px auto;
  padding: 0 15px;
  width: 50%;

  img{
    width: 30px;
    padding-right: 8px;
  }
  
  h4{
    padding-right: 5px;
  }
`
const CardPequeno = (props) => {
  return (
    <DivCardPequeno>
      <img src={props.imagem} alt={props.alt} />
      <h4> {props.categoria} </h4>
      <p> {props.dado} </p>
    </DivCardPequeno>
  )
}

export default CardPequeno