const calculator = {
    add : function(a , b){
        console.log(a+b);
    },
    minus : function(a , b){
        console.log(a - b);
    },
    multiply : function(a , b){
        console.log(a * b);
    },
    division : function(a,b){
        console.log(a / b);
    },
    power : function(a,b){
        console.log( a ** b);
    }

}

calculator.add(1,2);
calculator.minus(2 , 1);
calculator.multiply(2 , 1);
calculator.division(2 , 1);
calculator.power(2 , 3);
