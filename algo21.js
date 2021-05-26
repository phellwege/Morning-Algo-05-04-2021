/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods like split, slice, and substring
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
    let new_arr = [];
    let new_str = "";
    for (i = 0; i < fullNames.length; i++) {
        new_str = fullNames[i];
    }
    let temp_str = '';
    let last_name = '';
    for (i = 0; i < new_str.length; i++) {
        if (new_str[i] == ",") {
            console.log(temp_str);
            last_name = temp_str;
            temp_str = "";
        }
        else {
            temp_str += (new_str[i]);
        }
    }
    console.log(honorific + temp_str + " " + last_name);

}



// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4

const lengthOfLongestSubstr = (s) => { }

/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods like split, slice, and substring
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
    const output = [];

    for (const fullName of fullNames) {
        let firstName = "";
        let lastName = "";
        let foundComma = false;

        for (let i = 0; i < fullName.length; i++) {
            const char = fullName[i];

            if (char === ",") { foundComma = true };

            if (char !== " " && char !== ",") {
                if (foundComma === false) {
                    lastName += char;
                } else {
                    firstName += char;
                }
            }
        }
        output.push(`${honorific} ${firstName} ${lastName}`);
    }
    return output;
}





// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4

const lengthOfLongestSubstr = (s) => {
    let max = 0; // max count
    let count = 0; // current count
    let seenAtIdx = {}; // character dictionary

    for (let i = 0; i < s.length; i++) { // loop the str
        const char = s[i]; // pull out each character

        // {"d": 0, "c": 1, "f": 2}

        // check if it's in the dict
        if (!seenAtIdx.hasOwnProperty(char)) {
            seenAtIdx[char] = i; // if not save the character and it's index
            count++; // increment the count
            if (count > max) { // update max if higher
                max = count;
            }
            // otherwise it's in the dictionary already and we have to start over
        } else {
            if (i === s.length - 1) { // make sure we're not done
                return max;
            }
            // move i back to where the dupe was last seen.
            // i will then increment one after the last seen dupe location.
            // then cases like "dvadf", where "vadf" is the longest, we must
            // backwards to just after the first "d" to catch it
            i = seenAtIdx[char];
            seenAtIdx = {};
            count = 0;
        }
    }
    return max;
}