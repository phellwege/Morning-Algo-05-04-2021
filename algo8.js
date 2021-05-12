/**
 * From an interview on 2/8/21. encodeStr algo was also given (aaabbcdd => a3b2cd2)
 *
 * The interviewee mentioned it was mostly a comprehension style question.
 *
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */

function measureWaterLevels(waterLevels) {
    let largestDiff = -1;
    let lowestLevel = waterLevels[0];
    let difference = 0;
    for (var i = 0; i < waterLevels.length; i++) {
        for (var j = i + 1; j < waterLevels.length; j++) {
            if (waterLevels[i] < waterLevels[j]) {
                difference = waterLevels[j] - waterLevels[i];
                if (difference > largestDiff) {
                    largestDiff = difference;
                }
            }
            else if (i >= i + 1) { // take out condition
                return largestDiff; // this can just be continue
            }
        }
    }
    return largestDiff;
}

function measureWaterLevels1(waterLevels) {
    let largestDiff = -1;
    let lowestLevel = waterLevels[0];
    let difference = 0;
    for (var i = 0; i < waterLevels.length; i++) {
        for (var j = i + 1; j < waterLevels.length; j++) {
            if (waterLevels[i] < waterLevels[j]) {
                difference = waterLevels[j] - waterLevels[i];
                // console.log(waterLevels[i])
                // console.log(waterLevels[j])
                // console.log(difference);
                if (difference > largestDiff) {
                    largestDiff = difference;
                }
            } else {
                continue;
            }
        }
    }
    return largestDiff;
}
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))

//that doesnt return anything for me
// no worries just keep your solution
//both worked!
// idk why it gave issues earlier i may have missed a bracket

console.log(measureWaterLevels1(riverLevels2))
console.log(measureWaterLevels1(riverLevels3))
console.log(measureWaterLevels1(riverLevels4))
console.log(measureWaterLevels1(riverLevels5))
console.log(measureWaterLevels1(riverLevels6))
console.log(measureWaterLevels1(riverLevels7))