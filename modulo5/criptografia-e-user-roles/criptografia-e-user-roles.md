### Exercicio 1

## a) O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?
round é o mesmo que cost, que é o fator de segurança da senha, sendo recomendado o 12
salt precisa ser gerado pela função gerar salt, é a string aleatória. genSaltSync(rounds)

## b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.

## c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs

----
### Exercicio 2

## a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
No cadastro, pois lá ficará armazenada a senha para uma futura alteração ou comparação no login

## b) Faça a alteração do primeiro endpoint

## c) Faça a alteração do segundo endpoint

## d) No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

----
### Exercicio 3

## a) Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.

## b) Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.

## c) Altere o cadastro para receber o tipo do usuário e criar o token com essa informação

## d) Altere o login para criar o token com o `role` do usuário

----
### Exercicio 4
## a) Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint