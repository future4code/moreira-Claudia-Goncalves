import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { ContainerMatches, Img } from './styled'

const TelaMatches = () => {
  const [listaDeMatches, setListaDeMatches] = useState([])
  const todosOsMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/matches")
      .then((res) => {
        setListaDeMatches(res.data.matches)
      })
  }
  useEffect(() => {
    todosOsMatches();
  }, []);

  return (
    <ContainerMatches>
      <h3>Meus Matches</h3>
      {listaDeMatches.map((item) => {
        return (
          <ul key={item.id}>
            <Img src={item.photo} alt={item.name} />
            <b>{item.name}</b>
          </ul>
        )
      })}
    </ContainerMatches>
  )
}

export default TelaMatches