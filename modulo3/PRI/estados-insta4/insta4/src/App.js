import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const CriarPost = styled.div`
  display:flex;
  flex-direction:column;
  border:1px solid black;
  width: 300px;
  margin: 15px;

  h3{
    text-align: center;
  }

  input{
    padding: 8px;
    margin: 10px;
  }

  button{
    margin: 15px auto;
    width: 50%;
  }
`

const postsArray = [
  {
    nomeUsuario: 'Paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150',
  },
  {
    nomeUsuario: 'Amandinha',
    fotoUsuario: 'https://picsum.photos/50/51',
    fotoPost: 'https://picsum.photos/200/151',
  },
  {
    nomeUsuario: 'Biazinha',
    fotoUsuario: 'https://picsum.photos/50/52',
    fotoPost: 'https://picsum.photos/200/152',
  },
]

class App extends React.Component {
  state = {
    posts: postsArray,
    usuarioNome: "",
    usuarioFoto: "",
    postFoto: '',
  }


  onChangeNomeUsuario = (e) => {
    this.setState({ usuarioNome: e.target.value })
  }

  onChangeUsuarioFoto = (e) => {
    this.setState({ usuarioFoto: e.target.value })
  }

  onChangePostFoto = (e) => {
    this.setState({ postFoto: e.target.value })
  }

  criarPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.usuarioNome,
      fotoUsuario: this.state.usuarioFoto,
      fotoPost: this.state.postFoto,
    }

    const copiaNovaPostagem = [...this.state.posts, novaPostagem]

    this.setState({
      posts: copiaNovaPostagem,
      usuarioNome: "",
      usuarioFoto: "",
      postFoto: '',
    })
  }

  render() {
    const dadosPost = this.state.posts.map((item, index) => {
      return (
        <Post key={index}
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <CriarPost>
          <h3>Crie um post</h3>

          <input placeholder={'Nome do Usuario'}
            value={this.state.usuarioNome}
            onChange={this.onChangeNomeUsuario} />


          <input placeholder={'Foto do Usuário'}
            value={this.state.usuarioFoto}
            onChange={this.onChangeUsuarioFoto} />


          <input placeholder={'Foto do post'}
            value={this.state.postFoto}
            onChange={this.onChangePostFoto} />

          <button onClick={this.criarPost}>Criar post</button>

        </CriarPost>

        {dadosPost}


      </MainContainer>

    );
  }
}

export default App;
