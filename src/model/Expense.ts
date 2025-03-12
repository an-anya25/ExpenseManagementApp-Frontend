export interface Expense {
  id?: number;
  expenseId?: string;
  name: string;
  note: string;
  amount: number;
  createdAt: string;
  category: string;
}
