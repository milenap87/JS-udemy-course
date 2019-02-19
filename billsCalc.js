//124, 48, 268
//1-array: zawiera trzy napiwki
//2-array: zawiera trzy rachunki (cena + napiwek)
var tipCalculator = function(fee){
    if (fee < 50){
        return tip = fee * 0.2;
    } else if (fee >= 50 && fee <= 200){
        return tip = fee * 0.15;
    } else {
        return tip = fee * 0.1;
    }
}

var billCalculator = function(check){
    if (check < 50){
        return payment = check + check * 0.2;
    } else if (check >= 50 && check <= 200){
        return payment = check + check * 0.15;
    } else {
        return payment = check + check * 0.1;
    }
}

console.log(tipCalculator(124));
console.log(billCalculator(124));

var firstTip = tipCalculator(124);
var secondTip = tipCalculator(48);
var thirdTip = tipCalculator(268);

var tips = [];

tips.push(firstTip);
tips.push(secondTip);
tips.push(thirdTip);
console.log(tips);

var bills = [];

var firstBill = billCalculator(124);
var secondBill = billCalculator(48);
var thirdBill = billCalculator(268);

bills.push(firstBill);
bills.push(secondBill);
bills.push(thirdBill);
console.log(bills);