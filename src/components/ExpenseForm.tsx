import { categories } from "../data/categories";
import type { DraftExpense } from "../types";
import { useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    })

    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">Nuevo gasto</legend>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >Nuevo gasto</label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto: "
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >Cantidad</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Ingrese la cantidad del gasto ej. 1500: "
                    className="bg-slate-100 p-2"
                    name="amount"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >Categoria</label>
                <select
                    
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >{category.name}</option>

                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >Fecha gasto:</label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                />
            </div>

            <input
                type="submit"
                className="bg-blue-600 cursor-pointer w-full text-white uppercase font-bold rounded-lg"
                value={'Registrar gasto'}
            />
        </form>
    )
}
