import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

// Create new interface DTO for create()
interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // Use reduce() to get the balance
    const totalBalance = this.transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        // If 'income' or 'outcome'
        if (transaction.type === 'income') {
          accumulator.income += transaction.value;
        } else if (transaction.type === 'outcome') {
          accumulator.outcome += transaction.value;
        }

        // Refresh total
        accumulator.total = accumulator.income - accumulator.outcome;

        // Return the accumulator: Transaction
        return accumulator;
      },
      // Initial condition
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    // Return totalBalance
    return totalBalance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // Init new transaction: Transaction
    const transaction = new Transaction({ title, value, type });

    // Push transaction to transactions
    this.transactions.push(transaction);

    // Return transaction
    return transaction;
  }
}

export default TransactionsRepository;
