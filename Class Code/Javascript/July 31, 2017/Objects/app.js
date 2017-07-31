


// var city1 = 'karachi';
// var city2 = 'lahore';
// var city3 = 'pindi';
// var city4 = 'quetta';


// var cities = ['karachi', 'lahore', 'pindi', 'quetta'];

// var city = {
//     cityName: 'Karachi',
//     population: 20000000,
//     foodLikes: ['gutkha', 'biryani', 'bbq'],
//     criminalActivities: true,
//     seaView: {
//         point: 'public',
//         category: 'samandar ki jga',
//         boat: true,
//         itemToEat: 'unde wala burger'
//     }
// }

// // console.log(city.seaView.point);

// city.populationType = 'mix';
// city.criminalActivities = 'false';
// console.log(city);








// var myObject = {};


// myObject.studentName = 'haider';

// console.log(myObject);



// var student = {
//     studentName: 'xyz',
//     fatherName: 'abc',
//     rolNumber: 2643,
//     batch: 4.2,
//     study: function(num){
//         console.log(num);
//     }
// }

// // var rolNumberExist = 'section' in student;
// // console.log(rolNumberExist);

// student.study(1);






// var plan1 = {
//     name: "Basic",
//     price: 100,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7, 8, 9],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;
//                 console.log(this.discountMonths[i]);
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };

// var discountedPrice = plan1.calcAnnual(.75);
// console.log(discountedPrice);











var student1 = {
    studentName: 'umer',
    rollNumber: 445
}
console.log(student1);
console.log(student1.rollNumber);

delete student1.rollNumber;

// console.log(student1);

var student2 = {
    studentName: 'maaz',
    rollNumber: 795
}

function Student(stName, rollNumber) {
    this.studentName = stName;
    this.rollNumber = rollNumber;
}

Student.prototype.batch = '4.2';
Student.prototype.hobby = function () {
    console.log('we love ludo star');
}

var student3 = new Student('mubashir', 219);
var student4 = new Student('ali', 2643);
// student3.batch = '4.1';
// console.log(student3.batch);
// console.log(student4);

// student3.hobby();


// var listOfProperties = [];
// for (var prop in student3) {
//     if (student3.hasOwnProperty(prop)) {
//         listOfProperties.push(prop);
//     }
// }
// console.log(listOfProperties);
