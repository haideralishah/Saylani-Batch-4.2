// var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
// var contents = p.innerHTML;
// console.log(document.childNodes[1]);

// document.childNodes[0].childNodes[2].childNodes[1].childNodes[3].innerHTML = 'wowwwwwwwwwwwwww...';

function click(e){
    console.log(e);
    return false;
}


var paras = document.getElementById('paras');
console.log(paras.firstChild.nodeValue);

// console.log(paras.firstChild.innerHTML);
// // console.log(paras.lastChild.innerHTML);
// console.log(paras.parentNode);
// console.log(paras.nextSibling);
// console.log(paras.previousSibling);

// var allPara = paras.getElementsByTagName('p');

// console.log(paras.childNodes);
// var pCount = 0;
// for (var i = 0; i < paras.childNodes.length; i++) {
//     if (paras.childNodes[i].nodeType == 1) {
//         pCount++;
//     }
//     if (pCount == 2) {
//         paras.childNodes[i].innerHTML = 'hello world';
//     }
// }
