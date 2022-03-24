import React from 'react'
import { useState } from "react"
import Header from '../Header/Header'
import TelaInicial from '../../pages/TelaInicial/TelaInicial'
import TelaMatches from '../../pages/TelaMatches/TelaMatches'
import Footer from '../Footer/Footer'

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
      <Footer />
    </div>
  )
}

export default SelecionarPagina