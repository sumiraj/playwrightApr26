function isAnagram(a, b) {
  // Step 1: Remove spaces and convert all letters to the same case
  const clean = str => str.replace(/\s/g, "").toLowerCase();
 
  // Step 2: Sort the Characters
  const sortChars = str => clean(str).split("").sort().join("");
 
  // Step 3: Compare Sorted Strings
  const sortedA = sortChars(a);
  const sortedB = sortChars(b);
 
  // Step 4: Return the Result
  return sortedA === sortedB;
}
 
console.log("Input: isAnagram('listen', 'silent')");
console.log("Output:", isAnagram('listen', 'silent')); // true
 
console.log("\nInput: isAnagram('hello', 'world')");
console.log("Output:", isAnagram('hello', 'world')); // false