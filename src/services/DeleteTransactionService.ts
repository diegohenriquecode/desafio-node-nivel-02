import {getCustomRepository, TransactionRepository} from 'typeorm'

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction'
import TransactionsRepository from '../repositories/TransactionsRepository'
class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // So deleta se existir!
    const transactionsRepository = getCustomRepository(TransactionsRepository)

    const transaction = await transactionsRepository.findOne(id)

    if(!transaction) {
      throw new AppError('Transaction does not exists')
    }

    await transactionsRepository.remove(transaction)

    return;
  }
}

export default DeleteTransactionService;
