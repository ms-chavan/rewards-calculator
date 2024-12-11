import React, { useState } from "react";
import { useFetchTransactions } from "./hooks";
import { Processing } from "../../components/Processing";
import { TransactionHeaderRow, TransactionRow } from "./TransactionRow";

export const RewardDetails = () => {

    const [monthlyBill, setMonthlyBill] = useState(null);

    // this custom hook gets simulated async reponse using promise
    useFetchTransactions(monthlyBill, setMonthlyBill);

    if(monthlyBill) {
        return <>
        <table>
            <tbody>
            <TransactionHeaderRow />        

            {monthlyBill.map((month) => (
            <TransactionRow {...month} />
        ))}            
            </tbody>
        </table>
        </>
    }
    return <Processing />
}