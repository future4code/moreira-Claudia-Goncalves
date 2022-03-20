import { useState, useEffect } from "react"
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

const TelaMatches = () => {

  const [listaDeMatches, setListaDeMatches] = useState([])

  const todosOsMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/matches")
      .then((res) => {
        console.log(res.data.matches)
        setListaDeMatches(res.data.matches)
      })

  }
  useEffect(() => {
    todosOsMatches();
  }, []);

  return (
    <div>
      <h1>Meus Matches</h1>
      {listaDeMatches.map((item) => {
        return (
          <ul key={item.id}>
            <Img src={item.photo} alt={item.name} />
            <b>{item.name}</b>
          </ul>
        )
      })}
    </div>

  )
}

export default TelaMatches