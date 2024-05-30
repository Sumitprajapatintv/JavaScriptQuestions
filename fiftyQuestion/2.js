// Write a JavaScript function to check if a given string is a palindrome

function isplaindrome(str) {
  return str == str.split('').reverse().join('');
}

console.log(isplaindrome("aba"));