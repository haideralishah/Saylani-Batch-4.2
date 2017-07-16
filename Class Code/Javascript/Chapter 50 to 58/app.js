// function printTable(id) {
//     var tableName = document.getElementById(id).value;
//     // console.log(tableName);

//     for (var i = 0; i <= 12; i++) {
//         console.log(tableName + ' x ' + i + ' = ' + tableName * i);
//     }


// }

// var userName = 'haider ali shah';


// function greet() {
//     var rightNow = new Date();

//     var hours = rightNow.getHours();
//     var min = rightNow.getMinutes();

//     var greet;

//     if (hours >= 12 && hours < 17) {
//         greet = 'good after noon';
//     }
//     else if (hours < 12) {
//         greet = 'good morning';
//     }
//     else {
//         greet = 'good evening';
//     }

//     console.log(greet + ' ' + userName);
// }








// var firstName = 'haider';

// var lastName = 'ali';

// function greetUser(fName, lName) {
//     var rightNow = new Date();

//     var hours = rightNow.getHours();
//     var min = rightNow.getMinutes();

//     var greet;

//     if (hours >= 12 && hours < 17) {
//         greet = 'good after noon';
//     }
//     else if (hours < 12) {
//         greet = 'good morning';
//     }
//     else {
//         greet = 'good evening';
//     }

//     return greet + ' ' + firstName + ' ' + lastName;

// }

// var geeting = greetUser(firstName, lastName);

// console.log(geeting);







// function myFunc(func) {
//     func();
// }

// myFunc(function () {
//     alert('hello world');
// });

// myFunc(function () {
//     console.log('hello JS');
// });



// var meraFunction = function () {
//     console.log('function without name');
// }


// meraFunction();







// function letsSee() {
//     console.log('world is amazing');
// }






var longPara = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit incidunt fugit sunt reiciendis, labore quos fuga voluptatum beatae sed debitis dolore corporis omnis adipisci facilis amet voluptate repudiandae recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit incidunt fugit sunt reiciendis, labore quos fuga voluptatum beatae sed debitis dolore corporis omnis adipisci facilis amet voluptate repudiandae recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit incidunt fugit sunt reiciendis, labore quos fuga voluptatum beatae sed debitis dolore corporis omnis adipisci facilis amet voluptate repudiandae recusandae.';

function readMore(id) {
    var para = document.getElementById(id);
    para.innerHTML = longPara;
}


var todoList = ' <ol><li>BreakFast</li><li>Lunch</li><li>Dinner</li></ol>'

function showList(id) {
    document.getElementById(id).innerHTML = todoList;


}


function readPara() {
    var para = document.getElementById('para').id;
    console.log(para);
}



function makeInvisible(id) {
    var myImage = document.getElementById(id);
    myImage.style.display = 'none';
}


function makeVisible(id) {
    var myImage = document.getElementById(id);
    myImage.style.display = 'inline';
}



function increaseFontSize(id) {
    var para = document.getElementById(id);
    para.className += ' font-size-big';

}

// function incrase(id) {
//     var para = document.getElementById(id);
//     // console.log(para.style.fontSize);

//     para.style.fontSize = '1.2 em';
// }


// function makeLink(link, id) {
//     var myLink = document.getElementById(id);


//     if (link === 'google') {
//         myLink.href = 'https://wwww.google.com'
//     }
//     else if (link === 'fb') {
//         myLink.href = 'https://wwww.facebook.com'
//     }
//     console.log(myLink.href);

// }



// function swapImage(id) {
//     var myImage = document.getElementById(id);

//     myImage.src = 'images/after.jpg'

// }






function getPara() {
    var allParagraphs = document.getElementsByTagName('p');
    console.log(allParagraphs);

    for (var i = 0; i < allParagraphs.length; i++) {
        allParagraphs[i].style.color = 'red';
    }
}

function getSecondDivPara() {
    var myDiv = document.getElementById('secondDiv');
    var allSecondDivPara = myDiv.getElementsByTagName('p');

    allSecondDivPara[1].innerHTML = 'hello world';
}