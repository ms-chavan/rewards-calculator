import React from "react";

export const TransactionRow = React.memo(({monthId, bill, rewardPoints}) => {

    return <tr>
        <td>{monthId}</td>
        <td>{bill}</td>
        <td>{rewardPoints}</td>
    </tr>
}, (prevProps, nextProps) => prevProps.monthId !== nextProps.monthId);

export const TransactionHeaderRow = React.memo(() => {
    return <tr>
        <th>Month</th>
        <th>Bill</th>
        <th>Rewards</th>
    </tr>    
});