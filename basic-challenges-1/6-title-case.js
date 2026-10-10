
function titleCase(str) {
    // Step 1: Convert the entire string to lowercase
    // Step 2: Split the string into an array of words
    const words = str.toLowerCase().split(' ');

    // Step 3: Loop through each word in the array
    for (let i = 0; i < words.length; i++) {

        // Step 4: Get the first character and convert it to uppercase
        const firstLetter = words[i][0].toUpperCase();

        // Step 5: Get the remaining characters, starting from index 1
        const remainingLetters = words[i].slice(1);

        // Step 6: Combine both parts and update the current word
        words[i] = firstLetter + remainingLetters;
    }

    // Step 7: Join all words with spaces and return the result
    return words.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
// Output: "I'm A Little Tea Pot"
