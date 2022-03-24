import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { Container, ContainerButton } from './styled'

const TelaInicial = () => {

  const [nomeMatch, setNomeMatch] = useState('')
  const [bioMatch, setBioMatch] = useState('')
  const [fotoMatch, setFotoMatch] = useState('')
  const [idadeMatch, setIdadeMatch] = useState('')
  const [id, setId] = useState('')

  const perfilMatch = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/person"
    ).then((res) => {
      setNomeMatch(res.data.profile.name)
      setBioMatch(res.data.profile.bio)
      setFotoMatch(res.data.profile.photo)
      setIdadeMatch(res.data.profile.age)
      setId(res.data.profile.id)
    })
  }

  useEffect(() => {
    perfilMatch();
  }, []);

  const selecionarMatch = (escolha) => {
    const body = {
      id: id,
      choice: escolha
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/choose-person", body)
      .then((res) => {
        perfilMatch()
      })
  }

  const naoDeuMatch = () => {
    selecionarMatch(false);
  };

  const deuMatch = () => {
    selecionarMatch(true);
  };

  return (
    <Container>
      <img src={fotoMatch} alt={nomeMatch} />
      <b>{nomeMatch}, {idadeMatch}</b>
      <p>{bioMatch}</p>

      <ContainerButton>
        <button onClick={naoDeuMatch}> ❌ </button>
        <button onClick={deuMatch}> ❤️ </button>
      </ContainerButton>
    </Container>
  )
}
export default TelaInicial