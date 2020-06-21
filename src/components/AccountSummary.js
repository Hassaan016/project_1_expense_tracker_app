import React, { useContext } from 'react';

//>! Import the Global Context
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext); // Extract 'transactions' from GlobalContext

    const aulAmount = transactions.map((transactions) => transactions.transactionAmount);
    console.log("DEBUG: Transaction Amounts:" + aulAmount);

    const ulTotalIncome = aulAmount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log("DEBUG: ulTotalIncome:" + ulTotalIncome);

    const ulTotalExpense =  (aulAmount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    console.log("DEBUG: ulTotalExpense:" + ulTotalExpense);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{ulTotalIncome}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">{ulTotalExpense}</p>
            </div>
        </div>
    );
}