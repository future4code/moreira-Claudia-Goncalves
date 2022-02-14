import React from 'react'
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  padding: 15px 20px;
  margin: 0 auto;
  border: 1px solid black;
`

const ChooseButtons = () => {
  return (
    <Div>
      <button> Não Gostei </button>
      <button> Gostei </button>
    </Div>
  )
}

export default ChooseButtons