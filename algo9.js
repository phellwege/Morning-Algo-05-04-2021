/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
    //loop array
    //check current vs current +1 
    //if not consecutive store current+1 and its index in and object
    //add that object to result array
    let resultArray = [];
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i + 1] != sortedNums[i] + 1) {
            console.log("we went into if statement");
            let tempObj = {};
            tempObj['i'] = i + 1;
            tempObj['n'] = sortedNums[i + 1];
            resultArray.push(tempObj);
        }
    }
    return resultArray;
}

console.log(allNonConsecutive(nums1));