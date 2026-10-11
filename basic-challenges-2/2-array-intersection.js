// function arrayIntersection(arr1, arr2) {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   return result;
// }

// USING SET DATA STRUCTURE

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);

  let result = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])); // should return [1,3,5]
