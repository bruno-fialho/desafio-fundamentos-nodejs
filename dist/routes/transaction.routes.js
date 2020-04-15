"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateTransactionService_1 = __importDefault(require("../services/CreateTransactionService"));
var TransactionsRepository_1 = __importDefault(require("../repositories/TransactionsRepository"));
var transactionRouter = express_1.Router();
var transactionsRepository = new TransactionsRepository_1.default();
transactionRouter.get('/', function (request, response) {
    try {
        var transactions = transactionsRepository.all();
        // Create transactionsAnd Balance to unify
        var transactionsAndBalance = {
            transactions: transactions,
            balance: transactionsRepository.getBalance(),
        };
        // Return transactionsAndBalance
        return response.json(transactionsAndBalance);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
transactionRouter.post('/', function (request, response) {
    try {
        // Declare request.body variables
        var _a = request.body, title = _a.title, value = _a.value, type = _a.type;
        // Create new service
        var createTransaction = new CreateTransactionService_1.default(transactionsRepository);
        // Create new transaction with execute()
        var transaction = createTransaction.execute({
            title: title,
            value: value,
            type: type,
        });
        // Return transaction
        return response.json(transaction);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = transactionRouter;
