import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const GeneralStyles = styled.body`
padding: 0;
margin: 0;
box-sizing: border-box;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const SectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
// const TitleH3 = styled.h3`  
//   text-align: center;
//   margin-bottom: 20px;
//   `

const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <GeneralStyles>
      <AppContainer>
        <SectionContainer>
          <TitleH2>Dados pessoais</TitleH2>
          <CardGrande
            imagem="https://avatars.githubusercontent.com/u/60494846?v=4"
            nome="Claudia Carvalho"
            descricao="Oi, eu sou Claudia. Estudante da Labenu. Estou no modulo de front-end e no momento estou aprendendo React."
          />

          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </SectionContainer>

        <SectionContainer>
          <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/725/725643.png"
            referencia="Email:"
            dadosReferencia="claudia@gmail.com"
          />

          <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/1179/1179981.png"
            referencia="Endereço: "
            dadosReferencia="Rua da minha casa, Nova Iguaçu - RJ"
          />
        </SectionContainer>
        <SectionContainer>
          <TitleH2>Experiências profissionais</TitleH2>
          <CardGrande
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
            nome="Labenu"
            descricao="Formando desenvolvedores para o mercado de trabalho!"
          />

          <CardGrande
            imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0.png"
            nome="NASA"
            descricao="Apontando defeitos."
          />
        </SectionContainer>

        <SectionContainer>
          <TitleH2>Minhas redes sociais</TitleH2>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </SectionContainer>
      </AppContainer>
    </GeneralStyles>
  );
}

export default App;
