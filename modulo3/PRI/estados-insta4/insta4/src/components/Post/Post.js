import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { TelaCompartilhamento } from '../TelaCompartilhamento/TelaCompartilhamento'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaveBranco from '../../img/noSavePost.png'
import iconeSavePreto from '../../img/savePost.png'
import iconeCompartilhar from '../../img/compartilhar.png'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postSalvo: false,
    telaCompartilhar: false,
  }

  onClickCurtida = () => {
    const likeSim = this.state.numeroCurtidas + 1
    const deslike = this.state.numeroCurtidas - 1

    if (!this.state.curtido) {
      return (
        this.setState({
          curtido: !this.state.curtido,
          numeroCurtidas: likeSim
        })
      )
    } else {
      return (
        this.setState({
          curtido: !this.state.curtido,
          numeroCurtidas: deslike
        })
      )
    }
  }

  onClickSalvar = () => {
    this.setState({
      postSalvo: !this.state.postSalvo
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompatilharPost = () => {
    this.setState({
      telaCompartilhar: !this.state.telaCompartilhar,
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvarPost
    if (this.state.postSalvo) {
      iconeSalvarPost = iconeSaveBranco
    } else {
      iconeSalvarPost = iconeSavePreto
    }

    let componenteCompartilhar
    if (this.state.telaCompartilhar) {
      componenteCompartilhar = <TelaCompartilhamento />
    }

    let componenteComentario
    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return (
      <>
        <PostContainer>
          <PostHeader>
            <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{this.props.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeSalvarPost}
              onClickIcone={this.onClickSalvar}
            />

            <IconeComContador
              icone={iconeCompartilhar}
              onClickIcone={this.onClickCompatilharPost}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </PostFooter>
          {componenteComentario}
          {componenteCompartilhar}
        </PostContainer>
      </>
    )



  }
}

export default Post