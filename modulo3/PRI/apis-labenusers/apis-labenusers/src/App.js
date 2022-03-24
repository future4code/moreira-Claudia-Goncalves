import React from 'react'
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuarios from './components/ListaUsuarios'


class App extends React.Component {

  state = {
    paginaAtual: "listaUsuarios"
  }

  trocaDePagina = () => {
    if (this.state.paginaAtual === "cadastrar") {
      this.setState({ paginaAtual: "listaUsuarios" })
    } else {
      this.setState({ paginaAtual: "cadastrar" })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.trocaDePagina}>Trocar de Página</button>
        {this.state.paginaAtual === "cadastrar" ? <CadastroUsuario /> : <ListaUsuarios />}
      </div>
    );
  }
}

export default App;
