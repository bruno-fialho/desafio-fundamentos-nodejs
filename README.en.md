<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Challenge 05: First project in Node.js
</h3>

<p align="center">
  <a href="#rocket-about-the-application">About the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-installed-packages">Installed packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<img alt="Insomnia" src=./src/assets/screen-insomnia.gif />

## :rocket: About the application

An application in Node.js with TypeScript, using the concept of models, repositories and services!

This is an application to store incoming and outgoing financial transactions, which should allow the registration and listing of these transactions.

### Application Template

The template is available in the following URL: **[Access Template](https://github.com/Rocketseat/gostack-template-fundamentos-node)**

**Tip**: In case you don't know how to use Github repositories as templates, we have a guide in **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Navigate to the created folder and open it in the Visual Studio Code, remember to execute the command `yarn` in your terminal in order to install all the dependencies

### Application Routes

The application has the following routes:

- **`POST /transactions`**: The route must receive `title`, `value` and `type` within the body of the request, with `type` being the type of the transaction, which should be `income` for incoming (deposits) and `outcome` for exiting (withdrawn). When registering a new transaction, it must be stored inside an object with the following format:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: This route should return a list of all the transactions you have registered so far, together with the sum of the entries, withdrawals and total credit. This route must return an object with the following format:

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

### Specification of tests

In each test, you have a brief description of what your application must do in order for the test suits pass.

If you have questions about what the tests are, and how to interpret them, take a look at **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-challenges).**

For this challenge we have the following tests:

- **`should be able to create a new transaction`**: For this test to pass, your application must allow a transaction to be created, and return a JSON with the created transaction.

-**`should be able to list the transactions`**: For this test to pass, your application must allow an object containing all transactions to be returned together with the balance of income, outcome and total transactions that were created up to the time.

- **`should not be able to create outcome transaction without a valid balance`**: In order for this test to pass, your application must not allow a `outcome` type transaction to exceed the total amount that the user has in cash, returning a response with HTTP 400 code and an error message in the following format: `{error: string}`

## :cd: Installed packages

The following is a list of installed packages:

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

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.
