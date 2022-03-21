import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 30em;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  align-content: center;
  background-color: white;
  padding: 10px;

  b{
    font-size:1.5rem;
    text-align: center;
  }

p{
  text-align: center;
}

img{  
  height: 18.75rem;
  width: 18.75rem;
  margin: 0 auto;
  }

  button{
  height:6rem;
  width:6rem;
  background-color: #FFA349;
  border-radius: 50%;
  border: none;
  margin: 20px 20px;
  font-size: 2.5rem
  }

  button:hover{
  transition-duration: 0.1s;
  background-color: #FF896A;
}
`
export const ContainerButton = styled.div`
    text-align: center;
`