export const getTransactions = () => {
    const transactions = [
        {
            date: new Date('09-09-2024'),
            expense: 1000 // 900*2 + 19 = 1819
        },
        {
            date: new Date('09-12-2024'),
            expense: 745 // 645*2 + 13 = 1303
        },
        {
            date: new Date('09-28-2024'),
            expense: 463 // 363*2 + 9 = 735
        },
        {
            date: new Date('10-01-2024'),
            expense: 987
        },
        {
            date: new Date('10-05-2024'),
            expense: 100
        },
        {
            date: new Date('11-08-2024'),
            expense: 765
        },
        {
            date: new Date('11-25-2024'),
            expense: 678
        }
    ];


    const transactionPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(transactions), 2000);
        if(!transactions) {
            reject({error: true});
        }
    });

    return transactionPromise;
}