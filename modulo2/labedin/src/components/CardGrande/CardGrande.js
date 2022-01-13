import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 150px;
`
const Image = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const H4 = styled.h4`
    margin-bottom: 15px;
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigContainer>
            <Image src={props.imagem} />
            <DivContainer>
                <H4> {props.nome} </H4>
                <p>{props.descricao}</p>
            </DivContainer>
        </BigContainer>
    )
}

export default CardGrande;