import { Person } from './person';

export interface Debt {
  amount: number;
  debtor: Person;
  creditor: Person;
}
