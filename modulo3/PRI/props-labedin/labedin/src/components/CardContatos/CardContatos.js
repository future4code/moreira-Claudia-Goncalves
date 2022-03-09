import React from 'react'
import styled from 'styled-components'

const DivCardContatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 10px auto;
  border: 1px solid black;
  width: 50%;
  padding: 10px;
  cursor: pointer;

  img{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

const CardContatos = ({ imagem, nome, alt }) => {
  return (
    <DivCardContatos>
      <img src={imagem} alt={alt} />
      <h4>{nome}</h4>
    </DivCardContatos>
  )
}

export default CardContatos