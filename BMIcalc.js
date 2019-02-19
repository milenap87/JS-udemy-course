//BMI za pomocą obiektów
var markData = {
    firstName: 'Mark',
    lastName: 'Gray',
    height: 1.90,
    weight: 119,
    calcBMI: function(){
        return this.BMI = this.weight / (this.height*this.height);
    }
};

var johnData = {
    firstName: 'John',
    lastName: 'Raw',
    height: 1.73,
    weight: 79,
    calcBMI: function(){
        return this.BMI = this.weight / (this.height*this.height);
    }
};

var markBMI = markData.calcBMI();
var johnBMI = johnData.calcBMI();

console.log(markBMI, johnBMI);

if (markBMI > johnBMI){
    console.log('Mark is fatter than his friend. BMI: ' + markBMI);
} else if (johnBMI > markBMI){
    console.log('John is bigger than his friend. BMI: ' + johnBMI);
} else {
    console.log('Ooops, it seems that they equal!');
}