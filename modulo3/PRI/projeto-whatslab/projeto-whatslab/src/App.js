import React from 'react';


class App extends React.Component {
  state = {
    nomeUsuario: '',
    inputMensagem: '',
    mensagens: [],
  }

  onChangeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value })
  }

  onChangeInputMensagem = (e) => {
    this.setState({ inputMensagem: e.target.value })
  }

  enviarMensagem = () => {
    const mensagemEnviada = {
      usuario: this.state.nomeUsuario,
      textoMensagem: this.state.inputMensagem
    }

    const mensagemEnviadaFormatada = [...this.state.mensagens, mensagemEnviada]

    this.setState({ mensagens: mensagemEnviadaFormatada })
  }

  render() {
    return (
      <div>
        <h1>Whats Lab</h1>

        {this.state.mensagens.map((item, index) => {
          return (
            <p key={index}>
              <b>{item.usuario}</b>: {item.textoMensagem}
            </p>
          )
        })}

        <input
          placeholder="Seu nome"
          onChange={this.onChangeUsuario}
          value={this.state.nomeUsuario} />

        <input
          placeholder="Digite sua mensagem"
          onChange={this.onChangeInputMensagem}
          value={this.state.inputMensagem} />

        <button onClick={this.enviarMensagem}>Enviar</button>

      </div>
    )
  }
}

export default App;
