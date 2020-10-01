<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Desafio 05: Primeiro projeto Node.js
</h3>

<p align="center">
  <a href="#rocket-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-pacotes-instalados">Pacotes instalados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<img alt="Insomnia" src=./src/assets/screen-insomnia.gif />

## :rocket: Sobre a aplicação

Uma aplicação em Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa é uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

### Template da aplicação

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-fundamentos-node)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

### Rotas da aplicação

A aplicação tem as seguintes rotas:

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

**Dica**: Dentro de balance, o income é a soma de todos os valores das transações com `type` income. O outcome é a soma de todos os valores das transações com `type` outcome, e o total é o valor de `income - outcome`.

**Dica 2**: Para fazer a soma dos valores, você pode usar a função [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) para agrupar as transações pela propriedade `type`, assim você irá conseguir somar todos os valores com facilidade e obter o retorno do `balance`.

### Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio temos os seguintes testes:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`

## :cd: Pacotes instalados

A seguir segue uma lista dos pacotes instalados:

- [express](https://www.npmjs.com/package/express)
- [typescript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev#readme)
- [date-fns](https://github.com/date-fns/date-fns#readme)
- [uuidv4](https://github.com/thenativeweb/uuidv4#readme)
- [jest](https://jestjs.io/docs/en/getting-started)
- [supertest](https://www.npmjs.com/package/supertest)
- [ts-jest](https://kulshekhar.github.io/ts-jest)


	Opcional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
