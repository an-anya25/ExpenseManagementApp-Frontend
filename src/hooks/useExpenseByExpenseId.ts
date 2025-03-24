import { useEffect, useState } from "react";
import { getExpenseByExpenseId } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getExpenseByExpenseId(expenseId)
      .then((response) => setExpense(response.data))
      .catch((error) => {
        setErrors(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { expense, errors, loading };
};

export default useExpenseByExpenseId;
