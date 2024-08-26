function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

const calculator = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        return a/b;
    }
}

function caesarCipher(str, num) {
    num = num % 26; // Ensure the shift is within the alphabet range
    const lowerCaseStart = 97; // ASCII code for 'a'
    const upperCaseStart = 65; // ASCII code for 'A'
    const alphabetLength = 26; // Total number of letters in the alphabet
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= upperCaseStart && charCode <= upperCaseStart + alphabetLength - 1) {
            // Uppercase letter
            result += String.fromCharCode(((charCode - upperCaseStart + num) % alphabetLength) + upperCaseStart);
        } else if (charCode >= lowerCaseStart && charCode <= lowerCaseStart + alphabetLength - 1) {
            // Lowercase letter
            result += String.fromCharCode(((charCode - lowerCaseStart + num) % alphabetLength) + lowerCaseStart);
        } else {
            // Non-alphabetic character, don't change it
            result += str[i];
        }
    }

    return result;
}

const analyzeArray = {
    average(arr){
        let total = arr.reduce((acc,curr)=> acc + curr,0);
        return total/arr.length;
    },
    min(arr){
        return Math.min(...arr);
    },
    max(arr){
        arr.sort();
        return arr[arr.length-1];
    },
    length(arr){
        return arr.length;
    }
}

//97(a) -- 122(z)
module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};

