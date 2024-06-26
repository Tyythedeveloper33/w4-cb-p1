/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

function reject(array, cb) {
  let newArray = [];

  array.forEach((el) => {
    if (!cb(el)) {
      newArray.push(el);
    }
  })
  return newArray;
};

let hasAs = (el) => {
  let a = 'aA';
  let letter = el.split('');
 // console.log(letter);
 let i = 0
  while(i < letter.length){
    if (a.includes(letter[i])) {
      return true;
    } else {
      i++
    }
  }
return false;
}

console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasAs)); // [ 'depth', 'height' ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = reject;
} catch(e) {
  return null;
}
