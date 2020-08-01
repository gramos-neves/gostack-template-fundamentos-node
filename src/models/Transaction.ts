import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  // eslint-disable-next-line prettier/prettier
  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    // eslint-disable-next-line prettier/prettier
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
