function reverseString(str){
    let result = ''
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
    return result
}

// ANOTHER SOLUTION

// const reverseString = (str) => str.split('').reverse().join('')


console.log(reverseString("hello world"))