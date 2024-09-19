// function nameSwap(str) {
//     // Split the string into an array of words
//     const names = str.split(' ');

//     // Swap the first and last names
//     if (names.length === 2) {
//         return `${names[1]} ${names[0]}`;
//     } else {
//         return str; // Return the original string if it's not two names
//     }
// }

// console.log(nameSwap('Abraham Lincoln')); // Output: Abraham Lincoln
// console.log(nameSwap('Hank Aaron')); // Output: Hank Aaron



// function nameSwap(str) {
//     // Split the input string by spaces
//     const parts = str.split(' ');
//     // Swap the first and last name
//     return parts[1] + ' ' + parts[0];
// }

// // Test cases
// console.log(nameSwap('Abraham Lincoln')); // Output: 'Lincoln Abraham'
// console.log(nameSwap('Hark Aaron'));      // Output: 'Aaron Hark'





//TEST 1

function nameSwap(str) {
    const names = str.split(' ');
    if (names.length === 2) {
        return `${names[1]} ${names[0]}`; 
    }
    return str;
}

console.log(nameSwap('Abraham Lincoln')); //
console.log(nameSwap('Hank Aaron'));       
  

//TEST 2

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//TEST 3

function repeatString(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString('car', 4)); // Output: 'carcarcarcar'
console.log(repeatString('bar', 3)); // Output: 'barbarbar'


//TEST 4



function longestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (let word of words) {
        const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > maxLength) {
            maxLength = cleanWord.length;
        }
    }
    return maxLength;
}
console.log(longestWordLength('Hi, where is the airport?')); // Output: 7
console.log(longestWordLength('Thanks for stopping by!')); // Output: 8


























