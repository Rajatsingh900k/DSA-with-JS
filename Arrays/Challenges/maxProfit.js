// //this question is in leetcode 
// //note:- this code is not optimized O(n^2)


// function maxProfit(dayArray){
//     let maxiProfit=0;
//     for(let i=0;i<dayArray.length;i++){
//         for(let j=i+1;j<dayArray.length;j++){
//             const profit=dayArray[i]-dayArray[j];
//             maxiProfit=maxiProfit>profit?maxiProfit:profit;
//         }
//     }
//     return maxiProfit;
// }

// const dayArr=[7,1,5,2,3,6,4];
// console.log(maxProfit(dayArr));



//optimised version
function maxProfit(dayArray) {
    let miniPrice = Infinity; // Initialize the minimum price to a very high value
    let maxiProfit = 0; // Initialize maximum profit

    for (let i = 0; i < dayArray.length; i++) {
        // Update the minimum price if the current day's price is lower
        if (dayArray[i] < miniPrice) {
            miniPrice = dayArray[i];
        }
        // Calculate profit if selling on the current day
        const profit = dayArray[i] - miniPrice;
        // Update maximum profit if the current profit is greater
        if (profit > maxiProfit) {
            maxiProfit = profit;
        }
    }

    return maxiProfit; // Return the maximum profit
}

const dayArr = [7, 1, 5, 2, 3, 6, 4];
console.log(maxProfit(dayArr)); // Output: 5
