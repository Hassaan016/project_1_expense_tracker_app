import React, { useContext } from 'react';

//>! Import the Global Context
import { GlobalContext } from '../context/GlobalState';

//>! Import Transactions
import { Transaction } from './Transaction'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext); // Extract 'transactions' from GlobalContext

    console.log(transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                 {/*COMMENT: Convert object array to array values*/}
                {transactions.map((transactions) => (<Transaction key={transactions.id} transaction={transactions} />))} 
            </ul>
        </div>
    );
}