import { useReducer, createContext, Dispatch } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state : BudgetState
    dispatch : Dispatch<BudgetActions>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)



    return(
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>

    )
}