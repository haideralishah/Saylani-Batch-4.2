
// document.getElementById('container').innerHTML = 'hello world';






console.log(document.getElementById('linksList').attributes[0]);









// var allPara = document.getElementsByTagName('p');

// console.log(allPara);

// allPara[1].className = ' colorred';
// allPara[1].innerHTML = 'DOM learning';




// var allSpecialElements = document.getElementsByClassName('special');

// console.log(allSpecialElements);

// allSpecialElements[1].style.fontSize = '2em';



// var divEl = document.getElementById('container');
// var paraInContainer = divEl.getElementsByTagName('p');

// console.log(paraInContainer);

// var divContainer = document.getElementById('container').children;
// console.log(divContainer);
// divContainer[1].innerHTML = 'learning DOM';
// // console.log(c[2]);

// var bodyChildNodes = document.body.childNodes;

// console.log(bodyChildNodes[]);



// bodyChildNodes[1].childNodes[3].style.color = 'grey';
// bodyChildNodes[1].childNodes[3].style.fontSize = '2em';




// var divContainer = document.getElementById('container');
// // console.log(divContainer.hasAttribute('title'));
// // var attAvailable = divContainer.hasAttribute('title');


// divContainer.setAttribute('title', 'my div');
// divContainer.setAttribute('class', 'colorred');


// function myFunc(el) {
//     console.log(el.innerHTML);
// }



// var anchor = document.getElementsByTagName('a');

// if (anchor[0].hasAttribute('href')) {
//     var attValue = anchor[0].getAttribute('href');
//     console.log(attValue);
//     anchor[0].setAttribute('target', '_blank');
//     anchor[0].setAttribute('href', 'http://www.facebook.com');
// }

// console.log(anchor[0].attributes);


// var cont = document.getElementById('container');
// var myLink = document.getElementById('link');
// var mylinkText = document.getElementById('linkText');
// var ul = document.getElementById('linksList');

// function addElement() {


//     var linkValue = myLink.value;
//     var mylinkTextValue = mylinkText.value;

//     var linkText = document.createTextNode(mylinkTextValue);

//     var a = document.createElement('a');

//     a.setAttribute('href', linkValue);
//     a.setAttribute('target', '_blank');

//     var li = document.createElement('li');


//     a.appendChild(linkText);

//     li.appendChild(a);

//     ul.appendChild(li);

// }



// function removeElement() {

//     var nodeToRemove = ul.childNodes[2];
//     console.log(nodeToRemove);
//     ul.removeChild(nodeToRemove);
// }