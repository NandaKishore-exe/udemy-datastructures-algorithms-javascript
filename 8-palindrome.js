// function isPalindrome(str){
//     let reversedStr = ''

//     for(let i = str.length-1; i >= 0; i--){
//         reversedStr += str[i]
//     }

//     if(reversedStr === str){
//         return true
//     } else {
//         return false
//     }

// }

//ANOTHER SOLUTION

// const isPalindrome = (str) => {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reverseStr = formattedStr.split('').reverse().join('')

//     return formattedStr === reverseStr
// } 


console.log(isPalindrome('madam'))
console.log(isPalindrome('hello'))
