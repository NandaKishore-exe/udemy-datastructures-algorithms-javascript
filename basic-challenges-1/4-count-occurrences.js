function countOccurrences(str, char){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count += 1
        }
    }

    return count
}

// ANOTHER SOLUTION

// const countOccurrences = (str, char) => {
//     return (str.split(char).length-1)
// }

console.log(countOccurrences('hello', 'l')) // 2