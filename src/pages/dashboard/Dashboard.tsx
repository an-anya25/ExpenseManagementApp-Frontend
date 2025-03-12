import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";

const Dashboard = () => {
  const { expenses, error, loading } = useExpenses();
  return (
    <>
      {loading && <h1>LOADING!!!!!!!!!!!!!!!!!!!!</h1>}
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default Dashboard;
