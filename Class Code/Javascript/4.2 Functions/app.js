
// bringTea();


// function bringTea(){

//     console.log('bring a cup of tea.');


// }



// bringTea();
// bringTea();


// tellTime()
// function tellTime() {
//     var rightNow = new Date();
//     var hour = rightNow.getHours();
//     var minute = rightNow.getMinutes();
//     var second = rightNow.getSeconds();

//     console.log(hour + ':' + minute + ':' + second);
// }

// for (var i = 0; i < 1000; i++) {
//     console.log(i);
//     tellTime();
// }






// function cook(ingrd1, ingrd2) {

//     console.log('bring cooked ' + ingrd1 + ' and ' + ingrd2);

// }

// cook('biscuits', 'nimco');
// cook('tea', 'paratha');
// cook('pepsi', 'lassi');












// function multiply(num1, num2, num3) {
//     var result = num1 * num2 * num3;
//     console.log(result);
// }

// multiply(2, 2, 2);
// multiply(2, 3, 4);
// multiply(6, 5, 4);


// function square(num) {
//     console.log(num * num);
// }
// square(2);
// square(9);
// square(4);


// var firstNum = +prompt('tell a number');
// var secondNum = +prompt('tell another number');
// var oper = prompt('tell operator');

// calculate(firstNum, secondNum, oper);

// function calculate(num1, num2, operator) {

//     if (operator === '+') {
//         console.log(num1 + num2);
//     }
//     else if (operator === '-') {
//         console.log(num1 - num2);
//     }
//     else if (operator === '*') {
//         console.log(num1 * num2);
//     }
//     else if (operator === '/') {
//         console.log(num1 / num2);
//     }
//     else if (operator === '%') {
//         console.log(num1 % num2);
//     }
//     else {
//         console.log('something went wrong.');
//     }

// }

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// function substract(num1, num2) {
//     console.log(num1 - num2);
// }


// function myOperation(num1, num2, func) {
//     func(num1, num2);



// }

// myOperation(5, 7, function (num1, num2) {
//     console.log(num1 * num2);
// });

// myOperation(5, 7, substract);

// myOperation(5, 7, add);







// function square(num) {
//     var square = num * num;
//     return square;

// }

// var firstSquare = square(2);
// var secondSquare = square(4);


// console.log(firstSquare + secondSquare);




// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }
//     else {
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//     // return orderTot;
// }


// var orderTotal = calcTot(60);
// console.log(orderTotal);





// function abcd() {
//     // console.log(arguments);
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'haider ', true, ['a', 'b'], function () {
//     console.log('this is inner function');
// }, 'ali');




// userName = 'Ali';

function greetUser() {
    userName = 'haider';
    console.log(userName);

}

greetUser();
console.log(userName);