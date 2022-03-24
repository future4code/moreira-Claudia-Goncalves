import styled from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 20px;

h1{
  font-family: 'Chelsea Market', cursive;
  color: white;
  font-size: 3rem;
}

button{
  height:3.3rem;
  width:9.375rem;
  background-color: #FFA349;
  border-radius: 1em;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  margin: 0 10px;
  border: none;
}

button:hover{
  transition-duration: 0.1s;
  background-color: #FF896A;
}
`