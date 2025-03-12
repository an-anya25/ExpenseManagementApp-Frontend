import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getExpenses()
      .then((response) => setExpenses(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { expenses, error, loading };
};

export default useExpenses;
