// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("");
  console.log("no spaces --> ", noSpaces);
  const midIndex = Math.floor(noSpaces.length/2);
  console.log("mid index --> ", midIndex);
  const lastIndex = noSpaces.length - 1;
  console.log("last index --> ", lastIndex);
  for (let i = 0; i < midIndex; i++) {
    console.log("string --> ", str[i])
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  } 
    return true
};



// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(\"${word}\"):`);
  const actual = isPalindrome(word);
  console.log("actual --> ", actual);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
// assertPalindrome('Kayak', true);
// assertPalindrome('a santa at NASA', true);
