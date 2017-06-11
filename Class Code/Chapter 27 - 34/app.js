
// var heading = document.getElementById('myelement');
// var heading2 = document.getElementById('myelement2');
// var myStr = prompt('tell a number?');

// myStr = parseFloat(myStr);

// var numberStr = Number(myStr);

// var sum = numberStr + 1;

// var strSum = sum.toString();

// heading.innerHTML = sum
// heading2.innerHTML = strSum + 1



// var heading = document.getElementById('myelement');
// var heading2 = document.getElementById('myelement2');
// var myStr = 5;
// myStr = myStr.toFixed(2);

// heading.innerHTML = myStr


// var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var days = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];

// var rightNow = new Date();
// console.log(rightNow);

// var currentDay = rightNow.getDay();
// console.log(days[currentDay]);


// var currentDate = rightNow.getDate();
// console.log(currentDate);
// var currentMonth = rightNow.getMonth();
// console.log(month[currentMonth]);

// var currentYear = rightNow.getFullYear();
// console.log(currentYear);

// var currentHours = rightNow.getHours();
// console.log(currentHours);


// var currentMinute = rightNow.getMinutes();
// console.log(currentMinute);

// var currentSec = rightNow.getSeconds();
// console.log(currentSec);


// var currentMilliSec = rightNow.getMilliseconds();
// console.log(currentMilliSec);


// var rightNowTime = rightNow.getTime();
// console.log(rightNowTime);


// var rightNow = new Date();


// var eidDay = new Date('June 26, 2017 9:00:00');

// var meriBirthDay = new Date('October 04, 2017').getTime();
// var rightNow = new Date().getTime();
// console.log(meriBirthDay);
// console.log(rightNow);
// var remainTime = (meriBirthDay - rightNow) / (1000 * 60 * 60 * 24);
// console.log(remainTime);




var rightNow = new Date();
rightNow = rightNow.setFullYear(2010);

console.log(new Date(rightNow));