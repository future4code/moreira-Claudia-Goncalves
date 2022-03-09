import React from 'react';
import styled from 'styled-components'

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin: 10px auto;
    height: 200px;
    width: 50%;

    img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }

    h4{
    margin-bottom: 15px;
    }

    div{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <img src={props.imagem} alt={props.alt} />
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;