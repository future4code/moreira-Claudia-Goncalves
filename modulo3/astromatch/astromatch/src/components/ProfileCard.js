import React from 'react'
import styled from "styled-components";
import perfilExemplo from '../assets/perfilExemplo.jpg'


const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 15px 20px;
  margin: 0 auto;
  border: 1px solid black;

  img{
  width: 300px;
  }
`


export const ProfileCard = () => {
  return (
    <Div>
      <img src={perfilExemplo} alt="" />
      <p>Nome e Sobrenome, 35</p>
      <p>descrição da pessoa da foto com poucos caracteres</p>
    </Div>
  )
}

export default ProfileCard