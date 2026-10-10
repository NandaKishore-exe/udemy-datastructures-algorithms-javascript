// function removeDuplicates(arr){
//     const result = []

//     for(let i = 0; i < arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         } 
//     }

//     return result
// }


// USING SET

function removeDuplicates(arr){
    return Array.from(new Set(arr))
}


console.log(removeDuplicates([1,1,2,3])) // [1,2,3]