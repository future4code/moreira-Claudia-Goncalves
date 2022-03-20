import React from 'react'
import styled from 'styled-components'

import TelaInicial from '../pages/TelaInicial'
import TelaMatches from '../pages/TelaMatches'



const Header = (props) => {

  return (
    <div>
      <h1>Astromatch</h1>

      <button onClick={props.onClickPaginaPrincipal}>Voltar</button>
      <button onClick={props.onClickPaginaMatches}>Meus Matches</button>
    </div>
  )
}

export default Header