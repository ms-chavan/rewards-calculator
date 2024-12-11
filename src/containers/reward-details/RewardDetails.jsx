import React, { useState } from "react";
import { useFetchTransactions } from "./hooks";
import { Processing } from "../../components/Processing";

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
            <tr>
                <td>{month.monthId}</td>
                <td>{month.bill}</td>
                <td>{month.rewardPoints}</td>
            </tr>
        ))}            
            </tbody>
        </table>
        </>
    }
    return <Processing />
}