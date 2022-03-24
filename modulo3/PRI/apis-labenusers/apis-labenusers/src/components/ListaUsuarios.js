import React from 'react';
import axios from 'axios'


const headers = {
  headers: {
    Authorization: "claudia-carvalho-moreira"
  }
}

class ListaUsuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
    idUsuario: "",
    nomesDosUsuarios: ""
  }

  componentDidMount() {
    this.listaComUsuarios()
  }

  listaComUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers
    ).then((res) => {
      this.setState({ listaDeUsuarios: res.data })
    })
  }

  deletarUsuario = (id) => {
    if (window.confirm('Deseja apagar o usuário?')) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers
      ).then((res) => {
        alert(`Usuário deletado com sucesso`)
        this.listaComUsuarios()
      })
        .catch((err) => {
          alert(`Erro ao deletar usuário`)
        })
    }
  }

  render() {
    return (
      <div>
        <h3>Usuários Cadastrados</h3>
        <ul>
          {this.state.listaDeUsuarios.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
                <button onClick={() => this.deletarUsuario(item.id)}>Apagar</button></li>
            )
          })}
        </ul>
      </div>

    );

  }

}
export default ListaUsuarios;