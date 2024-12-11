import { useEffect } from "react";
import { getTransactions } from "../../shared/responseUtility";
import { getCalculatedRewardPoints } from "../../shared/util";

export const useFetchTransactions = (monthlyBillState, setMonthlyBill) => {
    useEffect(() => {
        if(!monthlyBillState) {
            getTransactions().then(response => {
                const monthlyBill = generateMonthlyBill(response);
                setMonthlyBill(monthlyBill);
            });
        }
    }, []);
}

function generateMonthlyBill(transactions) {
    let monthlyBill = [];
    const monthIndices = [];
    const totalBill = {monthId: 'Total', bill: 0, rewardPoints: 0};
    transactions.forEach(transaction => {
        const transactionDate = transaction.date;
        const monthIndex = transactionDate.getMonth();

        if(!monthIndices.includes(monthIndex)) {
            monthIndices.push(monthIndex);
        }
    });

    

    monthIndices.forEach((monthIndex) => {
        const monthBill = {
            monthId: monthIndex,
            bill: 0,
            rewardPoints: 0,
        };
        
        const transactionsForCurrentMonth = transactions.filter((trx) => monthIndex === trx.date.getMonth());
        transactionsForCurrentMonth.forEach((trx) => {
            const rewardPointsForTrx = getCalculatedRewardPoints(trx);

            monthBill.bill += trx.expense;
            monthBill.rewardPoints += rewardPointsForTrx;
        });
        
        monthlyBill.push(monthBill);
        totalBill.bill += monthBill.bill;
        totalBill.rewardPoints += monthBill.rewardPoints;

    });
    monthlyBill.push(totalBill);
    return monthlyBill;       
}
