import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

// Create new interface for execute
interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    // Verify balance condition
    const actualBalance = this.transactionsRepository.getBalance();

    // Throw Error if outcome > total balance
    if (type === 'outcome' && value > actualBalance.total) {
      throw Error('You have no money!');
    }

    // Create transaction
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    // Return transaction
    return transaction;
  }
}

export default CreateTransactionService;
