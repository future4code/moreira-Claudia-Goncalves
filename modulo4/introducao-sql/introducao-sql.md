### Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
**RESPOSTA**
*VARCHAR* - string de até 255 caracteres
*DATE* - representa data no formado yyyy-mm-dd
*PRIMARY KEY* - chave primária
*NOT NULL* - o campo não pode estar vazio


b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.
**RESPOSTA**
SHOW DATABASES - mostra o nome do banco de dados
SHOW TABLES - mostra a tabela criada

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.
**RESPOSTA**
mostra as colunas da tabela


### Exercício 2
a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
**RESPOSTA**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  120000,
  "1963-08-23", 
  "female"
);
```


b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
**RESPOSTA**
*error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*
chave primária duplicada
erro ocorreu pois a chave primária é um elemento que deve ser único

Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

- c) 
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
**RESPOSTA**
(id, name, salary) - não possui todos os parametros da coluna

- d)
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
**RESPOSTA**
não possui todos os parametros da coluna e nem seus valores

- e)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
**RESPOSTA**
a data deve ser ter seu valor passado em string


### Exercício 3
- a) Escreva uma query que retorne todas as informações das atrizes
```
SELECT * FROM Actor WHERE gender = "female";
```` 

- b) Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`
```
SELECT name, salary FROM  Actor WHERE name = "Tony Ramos";
```
- c) Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.

**RESPOSTA**
não retornou nenhum resultado, pois não existe `gender` com valor "invalid"

- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```
SELECT id, name, salary FROM Actor WHERE salary > 500000
```

- e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
```
SELECT id, nome from Actor WHERE id = "002"
```
**RESPOSTA**
não existe coluna nome e sim name
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4
- a) Explique com as suas palavras a query acima

**RESPOSTA**
LIKE - verifica se tem determinado valor na string 
BETWEEN - verifica se um valor está entre dois valores
NOT - negação da comparação

- b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```

- c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
```
SELECT * FROM Actor WHERE (name LIKE "%G%")
```

- d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,0
```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000
```

### Exercício 5
- a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.

Crie 4 filmes com as seguintes informações:
```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
```

```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
	"004",
    "Medida Provisória",
    "Em um futuro próximo distópico no Brasil, um governo autoritário ordena que todos os cidadãos afrodescendentes se mudem para a África.",
    "2022-04-14",
    8
);
```
### Exercício 5
Escreva uma query que:

- a) Retorne o id, título e avaliação a partir de um id específico;
```
SELECT id, nome, avaliacao from Filmes WHERE id = "002"
```

- b) Retorne um filme a partir de um nome específico;
```
SELECT nome from Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
```

- c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
```
SELECT id, nome, sinopse from Filmes WHERE avaliacao >= 7;
```

### Exercício 7
Escreva uma query que:
- a) Retorna um filme cujo título contenha a palavra `vida`
```
SELECT nome FROM Filmes WHERE nome LIKE "%vida%";
```
- b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
```
SELECT * FROM Filmes WHERE nome LIKE "%Dona%" OR sinopse LIKE "%futuro%";
```
- c) Procure por todos os filmes que já tenham lançado
```
SELECT * FROM Filmes WHERE data_lancamento < "2022-04-13";
```
- d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
```
SELECT * FROM Filmes
WHERE data_lancamento < CURDATE() AND 
      (nome LIKE "%Flor%" OR
      sinopse LIKE "%Helena%");
```