const ary = ["Apple" , 1,3 , "car"];

console.log("with for each");


// ary.forEach{(element) => {
//     console.log(element);
// }
// };  
const ary2 = ["Apple" , 1,3 , "car" , 99];
var F = ary2.filter((item) => item !== 99);
console.log("F = ", F);

var F1 = ary2.find((item) => item == 99);
console.log("F1 =", F1);
