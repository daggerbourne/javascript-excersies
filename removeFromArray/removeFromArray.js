const removeFromArray = function(...args) {

// This one kicked my ass so I kept all my ideas in here.
// I eventualy had to look up the solution :*( I attempted to learn
// Filter, but I didnt figure it out.


// arrayLength = arrayInput.length;
/*
let indexA = arrayInput.indexOf(arg1);
let indexB = arrayInput.indexOf(arg2);
arrayInput.splice(indexA, 1);

*/

/*
var i = 0;
while (i < arr.length) {
    if (arr[i] === arg1) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
}
*/

//const filtered = arr.filter(array(arg1)){
//  return

const array = args[0];

const newArray = [];

array.forEach((item) => {
if (!args.includes(item)) {
  newArray.push(item);
}
});
return newArray;
};

module.exports = removeFromArray
