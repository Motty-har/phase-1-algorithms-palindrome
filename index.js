function isPalindrome(word) {
 /* 
  Add your pseudocode here;
  -create a variable with value of word in reverse 
    -split string into array using spread operator
    -reverse aray using reverse()
    -stringify array using join("")
  -create an if else statement
  -compare variable with word in reverse to original word
  -if value === then return true
  -if values dont === return false
*/
  // Write your algorithm here
  const wordInReverse = [...word].reverse().join("")
  if(wordInReverse === word){
    return true
  }else{
    return false
  }
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
