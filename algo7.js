/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/
function orderedMultisetUnion(sortedA, sortedB) {
    let aCounter = 0;
    let bCounter = 0;
    let unionArray = [];
    while (sortedA.length+sortedB.length > aCounterounter) {
        if (sortedA[aCounter]> sortedB[bCounter]){
          let indexVal = sortedB[bCounter]
        } else{
          let indexVal = sortedA[aCounter]
        }
        
        for(let i = 0; i < sortedA.length; i++) {

        }
        for(let i = 0; i < sortedB.length; i++){

        }
        if()
        unionArray.push()
    }
    return unionArray
  }
//we need to see which of the two arrays has more of each value.

//2 separate counters, 1 for each array
//counter progress through until a new value is found
//compare the counters and choose the higher
//output that number of the value into a new array
//repeat until both arrays are finished


/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

