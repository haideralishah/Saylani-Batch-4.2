
// var userName = 'Haider';

// function greetUser() {

//     userName = 'Ali';

// }

// console.log(userName);

// greetUser();



























// var dayOfWk = 'Mon';


// switch (dayOfWk) {

//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");


// }




// for (var i = 0; i <= 3; i++) { 
//     console.log(i);
// }


// var i = 0;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }


// var i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i < 1);














function greetMe(userName) {

    console.log('hello ' + userName);


}



function makeYellow(el) {

    el.style.backgroundColor = 'yellow';
}


function makeWhite(el) {
    el.style.backgroundColor = 'white';
}


function readValue(fieldID) {

    var fieldValue = document.getElementById(fieldID).value;

    console.log(fieldValue);

}


function setProvience(fieldID, secondID) {
    var fieldValue = document.getElementById(fieldID).value;
    var secondForm = document.getElementById(secondID);

    fieldValue = fieldValue.toLowerCase();

    switch (fieldValue) {

        case "karachi":
            secondForm.value = 'Sindh'
            break;
        case "lahore":
            secondForm.value = 'Punjab'
            break;
        case "peshawar":
            secondForm.value = 'KP'
            break;
        case "quetta":
            secondForm.value = 'Blochistan'
            break;
        default:
            alert("Something in Pakistan");


    }




}