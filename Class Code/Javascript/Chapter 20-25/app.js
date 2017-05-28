
// var userInput = prompt();

// var greet = document.getElementById('greet');

// var userInputInLowerCase = userInput.toLowerCase()

// var userInputInUpperCase = userInput.toUpperCase()

// greet.innerHTML = userInputInLowerCase + ' ' + userInputInUpperCase;


















//toUpperCase() toLowerCase()

























// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "santa fe", "tucson", "great falls", "honolulu"];
// if (cleanestCities.indexOf(cityToCheck) !== -1) {
//     alert("It's one of the cleanest cities");
// }






// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }























/************************Slice length **************************/











// var userInput = prompt();
// // var userInput = 'Haider Ali Shah';

// var greet = document.getElementById('greet');

// var firstChar = userInput.slice(0, 1);
// var otherChars = userInput.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// greet.innerHTML = cappedCity;












// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
// }


















// str = 'haider  ali shah'

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 3) === "Ali") {
//         alert("No double spaces!");
//         break;
//     }
// }




















// var text = 'Lorem World War II ipsum dolor sit amet, consectetur World War II adipisicing elit. Aliquid laboriosam hic sint asperiores earum autem commodi nulla dolor nisi! Illo, nulla? Ut doloribus possimus sunt nisi animi, tempora neque hic.'

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// console.log(text);










// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }
























/*******************************Charat()******************/



// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         alert("Exclamation point found!");
//         break;
//     }
// }


























/********************replace()************ */









// var newText = text.replace(/World War II/g, "the Second World War");









