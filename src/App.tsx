import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import NewExpense from "./pages/expense/NewExpense.tsx";
import ExpenseDetails from "./pages/expense/ExpenseDetails.tsx";
import ExpenseReports from "./pages/expense/ExpenseReports.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<NewExpense />} />
        <Route path="/view/:expenseId" element={<ExpenseDetails />} />
        <Route path="/reports" element={<ExpenseReports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
