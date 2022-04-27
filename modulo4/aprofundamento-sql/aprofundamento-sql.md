### Exercício 1
Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a)
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
*Vai apagar a coluna de salário*



b)
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
*A coluna 'gender' agora irá se chamar 'sex' com 6 caracteres*


c)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
*A coluna 'gender' agora será do tipo VARCHAR com até 255 caracteres*


d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres
```
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b) Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) Escreva uma query que atualize todas as informações do ator com o id `005`
```
UPDATE Actor
SET 
	name = "Grazy Massafera",
	birth_date = "1985-08-19",
    salary = 53000,
    gender = "female",
    favorite_ice_cream_flavor = "chocolate",
    type = "Director"
WHERE id = "005";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
*Não apresenta erro, porém não é acrescentado os dados*

### Exercício 3
a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
```
DELETE FROM Actor
WHERE name = "Gloria Pires";
```

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```
```

