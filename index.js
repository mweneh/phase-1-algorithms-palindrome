function isPalindrome(word) {
  // Write your algorithm here
  const wordVal= word.split('')
  const revwordVal= wordVal.reverse()
  revWord= revwordVal.join('')
  if (word===revWord){
    return true
  }
  else return false
}
/* 
  Add your pseudocode here
  let len= word.length
for(let i=0; i<len/2; i++) {
  if (word[i]!== word[len-1-i]) {
    return false;
    
  }
  else true;
}
*/

/*
  Add written explanation of your solution here
split the string 
reverse the split string
join the reversed string
check whether the original string and reversed version are equal
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
