import React, { useContext } from 'react';

//>! Import the Global Context
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransactionAction } = useContext(GlobalContext);// Extract 'deleteTransactionAction' from GlobalContext

    return (
        <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
            {transaction.description}
             <span>${transaction.transactionAmount}</span>
            <button className="delete-btn" onClick={() => deleteTransactionAction(transaction.id)}> X </button>
        </li>
    );
}