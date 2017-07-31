var allNodes = document.childNodes;
// console.log(allNodes[1].childNodes[2].childNodes[1].childNodes[1].innerHTML);




// var cont = document.getElementById('container');
// // console.log(cont.childNodes[1].nodeType);

// var humpty = document.getElementById('humpty');
// var count = 0;
// for (var i = 0; i < humpty.childNodes.length; i++) {
//     // console.log(humpty.childNodes[i]);
//     if (humpty.childNodes[i].nodeType == 1) {
//         count++;
//     }
//     if (count == 2) {
//         humpty.childNodes[i].innerHTML = 'hello world';
//     }
// }













// var humpty = document.getElementById('humpty');
//     // console.log(humpty.childNodes[1].nextSibling);
//     // console.log(humpty.childNodes[1].previousSibling);

// console.log(humpty.nodeName);





// var h2 = document.getElementById('heading');

// console.log(h2.childNodes[0].nodeValue);
// console.log(h2.childNodes[0].parentNode.innerHTML);

















var humpty = document.getElementById('humpty');
var pCustome = document.createElement('p');
var text = document.createTextNode('DOM Learning');

pCustome.appendChild(text);

humpty.appendChild(pCustome);

var elToRemove = humpty.childNodes[1];
humpty.removeChild(elToRemove);



