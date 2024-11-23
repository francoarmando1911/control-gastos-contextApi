import { categories } from "../data/categories";
import type { DraftExpense, Value } from "../types";
import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    })

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const [error, setError] = useState('')
    const { dispatch, state, remainingBudget } = useBudget()

    useEffect (() => {
        if(state.editingId){
            const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)
            [0]
            setExpense(editingExpense)
        }
    },[state.editingId])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validar
        if (Object.values(expense).includes('')) {
            setError('Todos los puntos son obligatorios')
            return
        }

        //validar que no me pase del limite
        if (expense.amount > remainingBudget) {
            setError('Ese gasto se sale del presupuesto')
            return
        }

        //Agregar o actualizar gasto
        if(state.editingId){
            dispatch({type: 'update-expense', payload: {expense: {id: state.editingId, ...expense}}})
        }else{
            dispatch({ type: 'add-expense', payload: { expense } })
        }

        //Reiniciar el state
        setExpense({
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date()
        })
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend
                className="uppercase text-center text-2xl font-black py-2"
                style={{
                    borderBottom: '4px solid rgb(154, 3, 30)',
                }}
            >
                {state.editingId ? 'Guardar Cambios' : 'Nuevo Gasto'}
            </legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

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
                    onChange={handleChange}
                    value={expense.expenseName}
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
                    onChange={handleChange}
                    value={expense.amount}
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
                    onChange={handleChange}
                    value={expense.category}
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
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

            <input
                type="submit"
                className="cursor-pointer w-full text-white uppercase font-bold rounded-lg"
                style={{
                    backgroundColor: 'rgb(154, 3, 30)',
                }}
                value={state.editingId ? 'Guardar Cambios' : 'Registrar Gasto'}
            />
        </form>
    )
}
