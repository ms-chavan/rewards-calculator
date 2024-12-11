export const getCalculatedRewardPoints = (trx) => {
    // calculates the reward for each transaction

    const expense = trx.expense;
    let eligibleAmountAboveHundred = 0;
    let eligibleSplits = 0;

    if(expense > 100) {
        eligibleAmountAboveHundred = expense - 100;

        eligibleSplits = Math.floor(expense / 50);
        if(eligibleSplits > 0) {
            eligibleSplits -= 1;
        }
        const remainingChangeAfterSplit = expense % 100;
        eligibleSplits = remainingChangeAfterSplit >= 50 ? eligibleSplits + 1 : eligibleSplits;
    }

    const pointsOverHundredRsSpent = eligibleAmountAboveHundred * 2;

    return pointsOverHundredRsSpent + eligibleSplits;
}