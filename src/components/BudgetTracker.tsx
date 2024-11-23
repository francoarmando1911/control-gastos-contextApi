import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {

  const {state} = useBudget()

  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0),[state.expenses])

  return (
    <div className="grid grid-cols-1 md:grids-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Grafica de gastos" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button
              type="button"
              className="w-full p-2 text-white uppercase font-bold rounded-lg"
              style={{
                backgroundColor: 'rgb(95, 15, 64)',
              }}
            >
              Resetear app
            </button>

            <AmountDisplay
                label="Presupuesto"
                amount={state.budget}
            />

            <AmountDisplay
              label="Disponible"
              amount={200}
            />

            <AmountDisplay
              label="Gastado"
              amount={100}
            />



        </div>

    </div>
  )
}
