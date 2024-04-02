/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
let array = ['run', 'forest'];
function myMap(array, cb) {
    let result = [];
    for (const word in array) {
        let newWord = cb(array[word]);
        result.push(newWord);
    }
        return result;
};
let capitalization = (word) => word.toUpperCase() + '!';
console.log(myMap(array, capitalization));   // [ 'RUN!', 'FORREST!' ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myMap;
} catch(e) {
    return null;
}
