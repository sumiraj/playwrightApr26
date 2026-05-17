function lengthOfLastWord(s) {
  //Trim the String
  const trimmed = s.trim();

  //Split the String into Words
  const words = trimmed.split(" ");
  console.log("Words::", words);

  //Identify the Last Word
  const lastWord = words[words.length - 1];
  console.log("Last Word::", lastWord);

  //Calculate the Length of the Last Word
  const length = lastWord.length;
  console.log("Length::", length);


  return length;
}



console.log("Input: ' fly me to the moon '");
console.log("Output:", lengthOfLastWord(" fly me to the moon ")); // 4
