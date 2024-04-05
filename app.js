// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound , fromDollarToYen }

// One euro is
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    let yen = oneEuroIs.JPY;
    let usd = oneEuroIs.USD;
    return (yen/usd) * dollar;
}

function fromEuroToDollar (euro){
    return oneEuroIs.USD * euro;
}

function fromYenToPound(yen){
    let euro = (yen/oneEuroIs.JPY);
    return euro * oneEuroIs.GBP;
}