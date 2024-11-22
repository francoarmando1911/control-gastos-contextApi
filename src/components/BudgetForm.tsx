import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm(){

    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.valueAsNumber)
        //console.log(e.target.id)

        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log('Añadir o definir presupuesto: ')
        dispatch({type: 'add-budget', payload: {budget}})
    }

    return(
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" style={{ color: 'rgb(95, 15, 64)' }} className="text-4xl font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit"
                value='Definir presupuesto'
                className="bg-red-700 hover:bg-red-800 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40" 
                disabled={isValid}
            />
        </form>
    )
}