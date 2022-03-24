import React from 'react'
import { ContainerHeader } from './styled'

const Header = (props) => {
  return (
    <ContainerHeader>
      <button onClick={props.onClickPaginaPrincipal}>Início</button>
      <h1>Astromatch</h1>
      <button onClick={props.onClickPaginaMatches}>Meus Matches</button>
    </ContainerHeader>
  )
}

export default Header