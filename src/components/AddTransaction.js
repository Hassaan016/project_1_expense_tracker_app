import React, { useState, useContext } from 'react';

//>! Import the Global Context
import { GlobalContext } from '../context/GlobalState';

import TransactionType from './TransactionType'

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { addTransactionAction } = useContext(GlobalContext); // Extract 'transactions' from GlobalContext
    const { transactionType } = useContext(GlobalContext);// Extract 'detectTransactionTypeAction' from GlobalContext

    let ulEvalualteTransactionAmount = 0;

    transactionType === 'income' ? ulEvalualteTransactionAmount = parseInt(transactionAmount) : ulEvalualteTransactionAmount = parseInt(transactionAmount * -1);

    const onSubmit = (event) => {
        event.preventDefault();

        const objNewTransaction = {
            id: Math.floor(Math.random() * 10000000),
            description,
            transactionAmount: ulEvalualteTransactionAmount // Convert to integer
        }

        addTransactionAction(objNewTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit={onSubmit}>
                <TransactionType/>

                <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        placeholder="Detail of Transaction"
                        value={description}

                        onChange={(event) => setDescription(event.target.value)}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor='transactionamount'>
                        Transaction Amount
                    </label>
                    <input type="number"
                        id="transactionamount"
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}

                        onChange={(event) => setTransactionAmount(event.target.value)}>
                    </input>

                    <button className="btn" onClick={CbAddTransactionBtn}>
                        Add Transaction
                </button>
                </div>
            </form>

        </div>
    );
}

const CbAddTransactionBtn = (event) => {

    console.log("DEBUG: Add Transaction Button Clicked!");
    return (<div><h4>CbAddTransactionBtn</h4></div>);
}