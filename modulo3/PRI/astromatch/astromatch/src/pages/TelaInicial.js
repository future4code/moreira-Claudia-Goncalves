import { useState, useEffect } from "react"
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  img{  
    height: 300px;
  }
`
const ContainerButton = styled.div`
    display: flex;
    width: 500px;
    justify-content: center;
`

const TelaInicial = () => {

  const [nomeMatch, setNomeMatch] = useState('')
  const [bioMatch, setBioMatch] = useState('')
  const [fotoMatch, setFotoMatch] = useState('')
  const [idadeMatch, setIdadeMatch] = useState('')
  const [escolhendoMatch, setEscolhendoMatch] = useState(undefined)
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
    // setEscolhendoMatch(undefined)
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/claudia/choose-person", body)
      .then((res) => {
        console.log(res)
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
      <p>{nomeMatch}, {idadeMatch}</p>
      <p>{bioMatch}</p>


      <ContainerButton>
        <button onClick={naoDeuMatch} > [x] </button>

        <button onClick={deuMatch} >♥</button>
      </ContainerButton>
    </Container>
  )
}

export default TelaInicial