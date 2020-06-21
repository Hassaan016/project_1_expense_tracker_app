import React, { useContext } from 'react';

//>! Import the Global Context
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext); // Extract 'transactions' from GlobalContext

    const aulAmount = transactions.map((transactions) => {
        console.log("DEBUG: Transaction Amount:" + transactions.transactionAmount);
        return (transactions.transactionAmount);
    });

    const ulCurrentBalance = aulAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log("DEBUG: Total Transaction Amount:" + ulCurrentBalance);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${ulCurrentBalance}</h1>
        </div>
    );
}