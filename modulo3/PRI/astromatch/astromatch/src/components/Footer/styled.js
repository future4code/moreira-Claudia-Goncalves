import styled from 'styled-components'

export const ContainerFooter = styled.div`
background-color: #F27841;
bottom: 0;
position: fixed;
width: 100%;
display: flex;
justify-content: center;
padding: 10px 0;
height: 3rem;

button{
  border: none;
  margin: 0 10px;
  align-items: center;
  height: 25px;
  border-radius: 0.5em; 
}

button:hover{
  border: none;
  background-color: red ;
}
`
