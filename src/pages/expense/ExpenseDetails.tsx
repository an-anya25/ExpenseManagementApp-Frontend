import { Link, useNavigate, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!expenseId) {
    return <p className="text-danger">Invalid expenseId</p>;
  }
  const { expense, errors, loading, setLoading, setErrors } =
    useExpenseByExpenseId(expenseId);

  const handleCancel = () => {
    console.log("cancel clicked");
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoading(true);
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {
        if (response && response.status === 204) {
          navigate("/");
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setLoading(false);
        setShowDialog(false);
      });
  };

  return (
    <div className="container mt-2">
      {loading && <h1>Loading!!!!!!</h1>}
      {errors && <p className="text-danger">{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => setShowDialog(true)}
        >
          Delete
        </button>
        <button className="btn btn-sm btn-warning mx-2">Edit</button>
        <Link className="btn btn-sm btn-secondary" to="/">
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{expense ? expense?.name : "N.A"}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{expense ? expense?.category : "N.A"}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>
                  {expense
                    ? CurrencyUtils.formatToINR(expense?.amount!)
                    : "N.A"}
                </td>
              </tr>
              <tr>
                <th>Date</th>
                <td>
                  {expense
                    ? DateUtils.formateDateString(expense?.createdAt!)
                    : "N.A"}
                </td>
              </tr>
              <tr>
                <th>Note</th>
                <td>{expense ? expense?.note : "N.A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmDialog
        title="delete?"
        message="are u sure???"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ExpenseDetails;
