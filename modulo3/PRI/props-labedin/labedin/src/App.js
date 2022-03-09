import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardContatos from './components/CardContatos/CardContatos';
import email from './assets/email.png';
import endereco from './assets/endereco.png';
import telefone from './assets/telefone.png'

function App() {
  return (
    <>
      <h2>Dados pessoais</h2>
      <CardGrande
        imagem={"https://avatars.githubusercontent.com/u/60494846?s=96&v=4"}
        nome={"Claudia Carvalho"}
        descricao={"Oi, meu nome é Claudia. Sou aluna da Labenu. Adoro animais, a natureza e quebrar minha cabeça com códigos. "}
      />

      <ImagemButton
        imagem={"https://image.flaticon.com/icons/png/512/117/117472.png"}
        alt={"icone seta"}
        texto={"Ver mais"}
      />

      <CardPequeno imagem={email} alt={"icone email"} categoria={"Email:"} dado={"claudiacarvg@gmail.com"} />
      <CardPequeno imagem={telefone} alt={"icone telefone"} categoria={"Contato: "} dado={"(21) 97494-3094"} />
      <CardPequeno imagem={endereco} alt={"icone endereço"} categoria={"Endereço:"} dado={"Nova Iguaçu - RJ"} />

      <h2>Experiências profissionais</h2>
      <CardGrande
        imagem={"https://logosmarcas.net/wp-content/uploads/2020/05/Zara-Logo-1975-2008.jpg"}
        alt={"icone zara"}
        nome={"Zara"}
        descricao={"Auxiliar de vendas em tempo integral."}
      />

      <CardGrande
        imagem={"https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"}
        alt={"icone labenu"}
        nome={"Labenu"}
        descricao={"Formando desenvolvedores para o mercado de trabalho!"}
      />

      <CardGrande
        imagem={"https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg"}
        alt={"icone nasa"}
        nome={"NASA"}
        descricao={"Apontando defeitos."}
      />

      <h2>Meus Contatos</h2>
      <CardContatos
        imagem={"https://img.freepik.com/free-photo/beautiful-woman-after-spa-procedures-enjoying-herself-beauty-care_176420-8744.jpg?w=740"}
        nome={"Amanda Soares"}
        alt={"icone contato"} />
      <CardContatos
        imagem={"https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?w=740"}
        nome={"Alexandre Albuquerque "}
        alt={"icone contato"} />
      <CardContatos imagem={"https://img.freepik.com/free-photo/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?w=740"}
        nome={"Kevin Santos Silva "}
        alt={"icone contato"} />
      <CardContatos
        imagem={"https://img.freepik.com/free-photo/winsome-beautiful-young-woman-posing-brown-wall-close-up-shot-wonderful-brunette-girl_197531-13994.jpg?w=740"}
        nome={"Isadora Moreira Januci"}
        alt={"icone contato"} />

      <h2>Minhas redes sociais</h2>
      <ImagemButton
        imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"}
        alt={"icone facebook"}
        texto={"Facebook"}
      />

      <ImagemButton
        imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"}
        alt={"icone twitter"}
        texto={"Twitter"}
      />
    </>
  );
}

export default App;
