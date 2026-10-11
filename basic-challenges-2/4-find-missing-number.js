function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
