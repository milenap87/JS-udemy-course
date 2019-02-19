/*global console*//* eslint no-console: "off" */

//5 restaurants: 124, 48, 268, 180, 42
//<50 20%, 50-200 15%, >200 10%

var bills = {
    billValues: [124, 48, 268, 180, 42],
    tips: [],
    checks: [],
    calculateTip: function(){
        if (billValues[i]<50){
            for (var i=0; i<billValues.length; i++){
                cost = billValues[i] * 0.2;
                this.tips[cost];
                continue;
            }
        } else if (billValues[i] > 50 && billValues <= 200){
            for (var i=0; i<billValues.length; i++){
                cost = billValues[i] * 0.15;
                this.tips[cost];
                continue;
        } else {
            for (var i=0; i<billValues.length; i++){
                cost = billValues[i] * 0.1;
                this.tips[cost];
                continue;
        }
    }
}