import { Router } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';
import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();

    // Create transactionsAnd Balance to unify
    const transactionsAndBalance = {
      transactions,
      balance: transactionsRepository.getBalance(),
    };

    // Return transactionsAndBalance
    return response.json(transactionsAndBalance);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // Declare request.body variables
    const { title, value, type } = request.body;

    // Create new service
    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    // Create new transaction with execute()
    const transaction = createTransaction.execute({
      title,
      value,
      type,
    });

    // Return transaction
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
