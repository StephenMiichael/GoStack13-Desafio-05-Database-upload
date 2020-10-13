import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRespository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRespository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transactionRespository.remove(transaction);
  }
}

export default DeleteTransactionService;
