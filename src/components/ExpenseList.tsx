import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [state.expenses]
  );

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10 mx-3 md:mx-auto">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold mx-3 text-center md:text-left">
          No hay gastos
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5 mx-3">
            Listado de gastos:
          </p>

          {filteredExpenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
