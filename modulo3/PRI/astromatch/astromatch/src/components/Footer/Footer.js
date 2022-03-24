import React from 'react'
import axios from 'axios'
import { ContainerFooter } from './styled'

const Footer = () => {
  const apagarMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/clear")
      .then((res) => {
        return (
          alert("Matches resetados com sucesso!")
        )
      })
  }

  return (
    <ContainerFooter>
      <p>Não aparece mais Matches?</p>
      <button onClick={apagarMatches} >  Reset aqui</button>
    </ContainerFooter>
  )
}

export default Footer