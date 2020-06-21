import React, { createContext, useReducer } from 'react';

//>! Import the Reducer
import AppReducer from './AppReducer';

//>! Create the initial state
const initialState = {
    transactions:
        [
            // { id: 1, description: "Income 1", transactionAmount: 100 },
            // { id: 2, description: "Expense 1", transactionAmount: -50 },
            // { id: 3, description: "Income 2", transactionAmount: 200 },
            // { id: 4, description: "Expense 2", transactionAmount: -200 },
            // { id: 5, description: "Income 3", transactionAmount: 300 },
            // { id: 6, description: "Expense 3", transactionAmount: -300 }
        ],
    transactionType : "income"
}

//>! Create the Global Context
export const GlobalContext = createContext(initialState);

//>! Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //>! Action
    function deleteTransactionAction(id) {
        console.log("DEBUG: deleteTransactionAction() Called!");

        dispatch({ type: 'DELETE_TRANSACTION', payload: id }); // Dispatch a object
    }

    function addTransactionAction(transaction) {
        console.log("DEBUG: addTransactionAction() Called!");

        dispatch({ type: 'ADD_TRANSACTION', payload: transaction }); // Dispatch a object
    }

    function detectTransactionTypeAction(strTrasactionType) {
        console.log("DEBUG: detectTransactionTypeAction() Called!");

        dispatch({ type: 'TRANSACTION_TYPE', payload: strTrasactionType }); // Dispatch a object
    }

    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            transactionType: state.transactionType,
            deleteTransactionAction,
            addTransactionAction,
            detectTransactionTypeAction
        }}>
            {children}
        </GlobalContext.Provider>);
}