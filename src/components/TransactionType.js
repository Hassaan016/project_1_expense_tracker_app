import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const TransactionType = () => {
    const { detectTransactionTypeAction } = useContext(GlobalContext);// Extract 'detectTransactionTypeAction' from GlobalContext
    const { transactionType } = useContext(GlobalContext);// Extract 'transactionType' from GlobalContext

    return (
        <div className = "transaction-type">
            <div>
                <label>
                <input type="radio" value="income" checked={transactionType === "income"} onChange = {(event) => detectTransactionTypeAction(event.target.value)}/>
Income
</label>
            </div>
            <div>
                <label>
                    <input type="radio" value="expense" checked={transactionType === "expense"} onChange = {(event) => detectTransactionTypeAction(event.target.value)}/>
Expense
</label>
            </div>
        </div>
    );
}

export default TransactionType;