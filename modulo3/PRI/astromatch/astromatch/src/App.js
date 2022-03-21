import React from 'react'
import SelecionarPagina from './components/SelecionarPagina/SelecionarPagina'
import styled from 'styled-components'

const ContainerTotal = styled.div`
background-image: linear-gradient(to right, #D8437B , #F27841);
height: 100%;
width: 100%;
padding-bottom:100px;
`

function App() {
  return (
    <ContainerTotal>
      <SelecionarPagina />
    </ContainerTotal>
  );
}

export default App;



