import React from 'react';
import axios from 'axios'

class CadastroUsuario extends React.Component {

  state = {
    nomeUsuario: "",
    emailUsuario: "",
  }

  onChangeNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value })
  }

  onChangeEmailUsuario = (e) => {
    this.setState({ emailUsuario: e.target.value })
  }

  cadastrarUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "claudia-carvalho-moreira"
      }
    }).then((res) => {
      alert(`O usuário ${this.state.nomeUsuario} foi criado com sucesso!`)
      this.setState({ nomeUsuario: "", emailUsuario: "" })
    }).catch((err) => {
      alert("verifique os dados e tente novamente")
      this.setState({ nomeUsuario: "", emailUsuario: "" })
    })
  }

  render() {

    return (
      <div>
        <h2>Cadastre o usuário</h2>
        <input
          placeholder="Seu nome"
          onChange={this.onChangeNomeUsuario}
          value={this.state.nomeUsuario}
        />
        <input
          placeholder="Seu email"
          onChange={this.onChangeEmailUsuario}
          value={this.state.emailUsuario}
        />

        <button onClick={this.cadastrarUsuario}>Cadastrar</button>
      </div>

    );

  }

}
export default CadastroUsuario;