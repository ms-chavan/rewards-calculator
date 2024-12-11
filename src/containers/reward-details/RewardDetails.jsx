import React, { useState } from "react";
import { useFetchTransactions } from "./hooks";
import { Processing } from "../../components/Processing";
import { TransactionRow } from "./TransactionRow";

export const RewardDetails = () => {

    const [monthlyBill, setMonthlyBill] = useState(null);

    useFetchTransactions(monthlyBill, setMonthlyBill);

    if(monthlyBill) {
        return <>
        <table>
            <tbody>
                <tr>
                <th>Month</th>
                <th>Bill</th>
                <th>Rewards</th>
                </tr>            
            {monthlyBill.map((month) => (
            <TransactionRow {...month} />
        ))}            
            </tbody>
        </table>
        </>
    }
    return <Processing />
}