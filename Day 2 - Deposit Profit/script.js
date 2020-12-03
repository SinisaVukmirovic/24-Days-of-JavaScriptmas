function depositProfit(deposit, rate, threshold) {
    rate = rate / 100;
    let numbOfYears = 0;
    let balance = deposit;
    
    while (balance < threshold) {
        balance += balance * rate;
        numbOfYears++;
    }    
    
    return numbOfYears;
}

console.log('Years to reach threshold: ', depositProfit(100, 20, 170));
console.log('Years to reach threshold: ', depositProfit(200, 20, 470));
console.log('Years to reach threshold: ', depositProfit(10, 60, 180));