"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        // Use reduce() to get the balance
        var totalBalance = this.transactions.reduce(function (accumulator, transaction) {
            // If 'income' or 'outcome'
            if (transaction.type === 'income') {
                accumulator.income += transaction.value;
            }
            else if (transaction.type === 'outcome') {
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
        });
        // Return totalBalance
        return totalBalance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        // Init new transaction: Transaction
        var transaction = new Transaction_1.default({ title: title, value: value, type: type });
        // Push transaction to transactions
        this.transactions.push(transaction);
        // Return transaction
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
