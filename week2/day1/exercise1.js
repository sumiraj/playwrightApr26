function lengthOfLastWord(s) {
  // Step 1: Split the string into an array of words.
  const words = s.split(" ");

  // Step 2: Find the last word in the array.
  const lastWord = words[words.length - 1];

  // Step 3: Calculate the length of this word.
  return lastWord.length;
}

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

console.log("Length of last word in hello world ::",lengthOfLastWord("Hello World")); // Output: 5
