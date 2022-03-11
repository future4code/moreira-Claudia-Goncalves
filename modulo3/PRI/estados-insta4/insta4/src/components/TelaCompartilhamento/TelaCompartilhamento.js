import React from 'react';
import styled from 'styled-components'

const DivCompartilhar = styled.div`
  display:flex;
  flex-direction:column;
  border:1px solid black;
  padding:20px;

  button{
    margin: 10px auto;
    width: 50%;
  }
`

export class TelaCompartilhamento extends React.Component {

  state = {
    textoMensagem: '',
  }

  onChangeMensagem = (e) => {
    this.setState({ textoMensagem: e.target.value })
  }

  onClickCompartilharFacebook = () => {
    alert(`Post compartilhado no Facebook com a mensagem: "${this.state.textoMensagem}"`)
  }

  onClickCompartilharInstagram = () => {
    alert(`Post compartilhado no Instagram com a mensagem: "${this.state.textoMensagem}"`)
  }

  onClickCompartilharTwitter = () => {
    alert(`Post compartilhado no Twitter com a mensagem: "${this.state.textoMensagem}"`)
  }

  render() {

    return (

      <DivCompartilhar>
        <h3> Escolha uma rede social para compartilhar</h3>

        <input placeholder={"Deixe um comentário"} value={this.state.textoMensagem} onChange={this.onChangeMensagem} />

        <button onClick={this.onClickCompartilharFacebook}>Facebook</button>
        <button onClick={this.onClickCompartilharInstagram}>Instagram</button>
        <button onClick={this.onClickCompartilharTwitter}>Twitter</button>
      </DivCompartilhar>

    )
  }
}
