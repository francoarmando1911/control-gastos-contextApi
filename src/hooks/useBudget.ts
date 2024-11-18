import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context){
        throw new Error('useBudget must be used within a BudgetProvider')   //Mensaje de error para el usuario que no tiene rodeada su app con BudgetProvider para poder utilizar este custom hook
    }
    return context
}