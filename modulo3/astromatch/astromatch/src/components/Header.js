import React from 'react'
import styled from "styled-components";
import account from "../assets/account.png"
import astromatch from "../assets/astromatch.png"

const ContainerHeader = styled.header`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  padding: 0 20px;

  .logo{
    width: 280px;
    height: 90px; 
  }

  .account{
    width: 50px;
    height: 40px; 
  }
`

const Header = () => {
  return (
    <ContainerHeader>
      <img className='logo' src={astromatch} alt="logo astromatch" />
      <img className='account' src={account} alt="account" />
    </ContainerHeader>
  )
}

export default Header