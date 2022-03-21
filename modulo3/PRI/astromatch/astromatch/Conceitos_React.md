🚀 Praticando - Reforço



✅ **Props**

​	É a forma de passar um determinado parâmetro do componente pai para um componente filho.

exemplo: Quero passar uma função do componente pai para o componente filho (ou irmão)



No pai ficará assim: 

      return (
        <div>
          <Header
            onClickPaginaPrincipal={setarPaginaPrincipal}
          />
        </div>
      )

   "onClickPaginaPrincipal " é o nome da props

​	"setarPaginaPrincipal" é o nome da função criada



No filho ficará assim: 

    const Header = (props) => {
      return (
    	 <ContainerHeader>
       	 	<button onClick={props.onClickPaginaPrincipal}>Início</button>
     	 </ContainerHeader>
     	)

A função que vai receber a props precisa ter como parâmetro a 'props'

"onClick" é a função que quando clicada, é executada. E ela vai receber entre chaves, (props.)+(nome da prop criada anteriormente).



___________________________________________________________________________________________________________________________________________________________________________

✅ **State**

Estado, local onde serão armazenados dados que poderão ser modificados ao longo do tempo.

Toda vez que o estado for alterado, o React automaticamente invoca de novo a função *render*, que irá renderizar a UI com os novos dados *inputados* pelo usuário.

exemplo:

` const [nomeUsuario, setNomeUsuário] = useState('')`

Neste caso, nomeUsuario é onde o dado ficará guardado e setNomeUsuário é a função de alteração deste dado.



_____

✅ **Componente**

São blocos de códigos que podem ser reutilizados durante o projeto



________



✅ **Diferença entre componente de classe e funcional **

Componente de Classe:

​	uso do this.

​	ciclo de vida



Componente Funcional:

​	hooks



_____________

✅ **Hooks**

Hooks são funções que permitem ligação aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Também é possível criar hooks customizados.

exemplo: 

​	useState

​	useEffect 



_______

✅ **useState**

O useState declara um variável de estado, uma função de alteração e já informa o seu estado inicial, podendo também ser uma string, objeto e array vazios.

Exemplo:

`const [count, setCount] = useState(0);`

"count": onde o estado ficará guardado

"setCount": função que irá alterar o estado

'useState(0)': valor que com qual será iniciada a variável count



____



✅ **useEffect **

 Executa efeitos colaterais em componentes funcionais, se assemelha ao `componentDidMount()` e `componentDidUpdate()` dos componentes de classe.

Esse Hook, diz ao React que o componente precisa fazer algo apenas depois da renderização.

____

✅ **Layout estático da tela de perfil**




![telaInicial drawio](https://user-images.githubusercontent.com/60494846/159226123-8d11040a-5254-485a-bd5d-6100ec85b18e.png)





✅ **Layout estático da tela de matchs**

![telaInicial drawio (1)](https://user-images.githubusercontent.com/60494846/159226143-a0f73311-b07f-42a4-bf60-816e7d80e51c.png)
