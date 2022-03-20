import React from 'react'
import { useState, useEffect } from "react"
import Header from './Header'
import TelaInicial from '../pages/TelaInicial'
import TelaMatches from '../pages/TelaMatches'

const SelecionarPagina = () => {
  const [paginaAtual, SetPaginaAtual] = useState('paginaPrincipal')


  const trocaDePagina = () => {
    switch (paginaAtual) {
      case "paginaPrincipal":
        return <TelaInicial />
      case "paginaMatches":
        return <TelaMatches />
      default:
        return <TelaInicial />
    }
  }

  const setarPaginaPrincipal = () => {
    SetPaginaAtual("paginaPrincipal")
  }

  const setarPaginaMatches = () => {
    SetPaginaAtual("paginaMatches")
  }

  return (
    <div>
      <Header
        onClickPaginaPrincipal={setarPaginaPrincipal}
        onClickPaginaMatches={setarPaginaMatches}
      />
      {trocaDePagina()}
    </div>
  )
}

export default SelecionarPagina