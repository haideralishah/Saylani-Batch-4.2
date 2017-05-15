// console.log(haider);


// var userName = 'Hello World!';
// console.log(userName);

// userName = 'Haider';

// console.log(userName);

// var maleStudent = 35;
// var femaleStudent = 35;
// var totalStudents = maleStudent / femaleStudent;
// console.log(totalStudents);














// var month = prompt('month');
// if (month.length > 3) {
//     month = month.slice(0, 3);
// }
// console.log(month);











// var str = prompt('any string');

// for (var i = 0; i < str.length; i++) {
//     console.log(str[i] + str[i + 1]);
//     if (str.slice(i, i + 2) == '  ') {

//         alert('no double spaces');
//     }

// }




// var text = 'a quick Haider voluptatem fox jumps over the lazy dog';

// var copy = text.slice(17, 17 + 12)


// for (var i = 0; i < text.length; i++) {
//     // console.log(text.slice(i, i + 12));
//     if (text.slice(i, i + 6) === "Haider") {
//         // console.log(text.slice(i, i + 12));
//         // console.log(i);
//         text = text.slice(0, i) + "Ali" + text.slice(i + 6);
//     }
// }
// console.log(text);




// var text = 'a quick Haider voluptatem fox jumps over the lazy dog';


// var idx = text.indexOf('Haider');





















// var dateOfBirth = new Date();
// console.log(dateOfBirth);
// console.log(dateOfBirth.toString().slice(2,5));



// var rightNow = new Date();

// console.log(rightNow);


// var doomsday = new Date("June 30, 2035");
// console.log(doomsday);

// var diff = doomsday - rightNow;
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24)));















// function sumTwoNumbers(num1, num2) {
//     var sum = num1 + num2;
//     // console.log(sum);
//     // return 5;
//     return sum;
// }


// var sum = sumTwoNumbers(); // 5 + 7 

// console.log(sum, '----------------------');














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
//     return orderTot;
// }
// var userInput = +prompt('userinput');
// var totalCost = calcTot(userInput);

// console.log(totalCost);







// var abc = 'abdullah';


// function abcd() {
//     abc = 'haider';

//     return abc;
// }
// abcd();

// console.log(abc);









// console.log(2 % 20 % 6);

//   hyp2 = base2 + perp2


// function hyp(base, per) {
//     function square(num) {
//         return num * num;
//     }

//     var baseSquare = square(base);
//     var perpSquare = square(per);

//     var hypSquare = baseSquare + perpSquare;

//     var hyp = Math.sqrt(hypSquare);

//     return hyp;

// }
// var myHyp = hyp(5, 5);

// console.log(myHyp);







// function calculator(num1, num2, operator) {
//     if (operator === '+') {
//         return num1 + num2;
//     }
//     else if (operator === '-') {
//         return num1 - num2;
//     }
//     else if (operator === '*') {
//         return num1 * num2;
//     }
//     else if (operator === '/') {
//         return num1 / num2;
//     }
//     else if (operator === '%') {
//         return num1 % num2;
//     }
// }

// console.log(calculator(5, 5, '/'));







// function addition(num1, num2) {
//     return num1 * num2;
// }
// function substraction(num1, num2) {
//     return num1 + num2;
// }

// function multiplication(num1, num2) {
//     return num1 / num2;
// }


// function calculat(num1, num2, func) {
//     var myCall = func(num1, num2);
//     console.log(myCall);
// }

// calculat(10, 2, multiplication);








// var userName = 'Haider';

// function myFunc() {
//     var userName = 'Abdullah';


// }

// console.log(userName);

// myFunc(console.log(userName));

// console.log(userName);




// var greetUser = function (firstName, lastName) {
//     alert(firstName + ' ' + lastName);
// }

// greetUser('haider', 'ali');



// (function () {
//     console.log('hello world');
// })()