const calculator = {
    plus : function(a , b){
        return a+b;
    },
    minus : function(a , b){
        return a - b;
    },
    times : function(a , b){
        return a * b;
    },
    divide : function(a,b){
        return a / b;
    },
    power : function(a,b){
        return a ** b;
    }

}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.plus(plusResult, 10);
const timesResult = calculator.plus(10,minusResult);
const divedeResult = calculator.plus(timesResult, plusResult);
const powerResult = calculator.plus(divedeResult, minusResult);

