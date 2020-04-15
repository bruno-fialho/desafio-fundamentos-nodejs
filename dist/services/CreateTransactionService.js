"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        // Verify balance condition
        var actualBalance = this.transactionsRepository.getBalance();
        // Throw Error if outcome > total balance
        if (type === 'outcome' && value > actualBalance.total) {
            throw Error('You have no money!');
        }
        // Create transaction
        var transaction = this.transactionsRepository.create({
            title: title,
            value: value,
            type: type,
        });
        // Return transaction
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
