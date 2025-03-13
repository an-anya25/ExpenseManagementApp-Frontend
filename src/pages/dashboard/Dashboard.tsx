import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import { Expense } from "../../model/Expense";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const loggedInUser: string = "a@gmail.com";
  const { expenses, error, loading } = useExpenses();
  const totalExpenses = expenses.reduce(
    (acc: number, expense: Expense) => acc + expense.amount,
    0
  );
  return (
    <div className="container">
      {loading && <h1>LOADING!!!!!!!!!!!!!!!!!!!!</h1>}
      {error && <p>{error}</p>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalExpenses={totalExpenses}
      />
      <hr />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
