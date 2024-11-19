import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({expense} : ExpenseDetailProps) {

  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 item-center">
        <div>

        </div>

        <div>
            <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>

        <AmountDisplay
            amount={expense.amount}
        />

    </div>
  )
}
