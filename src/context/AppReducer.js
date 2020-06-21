export default (state, action) => {
    console.log("DEBUG: AppReducer Action Type:" + action.type);

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return ({
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            });

        case 'ADD_TRANSACTION':
            return ({
                ...state,
                transactions: [action.payload, ...state.transactions]
            });

            case 'TRANSACTION_TYPE':
                return ({
                    ...state,
                    transactionType: action.payload
                });

        default:
            return ({
                ...state
            });
    }
}